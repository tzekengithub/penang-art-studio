# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Van booking management system built with Next.js 16, React 19, Drizzle ORM, PostgreSQL (Neon), and a separate Flask/PyMuPDF microservice for PDF text extraction.

The main application lives in `van-scheduler/`. The root-level `drizzle/` and `lib/` files mirror the ones inside `van-scheduler/`.

## Common Commands

All commands run from `van-scheduler/`:

```bash
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build
npm run lint         # ESLint
npm run db:push      # Apply schema to database
npm run db:generate  # Generate Drizzle migration files
```

**PDF microservice** (runs separately, needed for PDF upload):
```bash
cd van-scheduler/pdf-service
pip install -r requirements.txt
python main.py       # Listens on PORT (default 8080)
# Or with gunicorn:
gunicorn -w 4 -b 0.0.0.0:8080 main:app
```

**Parser unit test:**
```bash
cd van-scheduler
npx ts-node scripts/test-parser.ts
```

## Environment

Create `van-scheduler/.env.local`:
```
DATABASE_URL=postgresql://user:password@host/dbname
PDF_SERVICE_URL=http://localhost:8080
```

## Architecture

### Next.js App (`van-scheduler/app/`)

Four pages, all client components with direct `fetch()` calls to API routes:
- `/` — Van/driver management + bulk operations (clear all, remove duplicates)
- `/daily-jobs` — Bookings for a selected date; PDF upload; inline editing
- `/all-jobs` — All bookings with search/sort/filter; PDF upload; inline editing
- `/van-schedule` — Monthly calendar grid (rows = vans, columns = days); color-coded conflicts

### API Routes (`van-scheduler/app/api/`)

| Route | Methods | Purpose |
|---|---|---|
| `/api/bookings` | GET, POST | List (filter by day/month/year, sort) or create booking |
| `/api/bookings/[id]` | PATCH, DELETE | Update or delete single booking |
| `/api/bookings/duplicates` | DELETE | SQL window-function dedup on (invoiceNo, travelDate, amount) |
| `/api/vans` | GET, POST, DELETE | Van CRUD |
| `/api/upload` | POST | Parse PDFs → assign vans → insert bookings |
| `/api/preview` | POST | Parse PDFs without inserting (for confirmation UI) |
| `/api/clear` | POST | Truncate all bookings |
| `/api/seed` | POST | Initialize sample data |

### Library (`van-scheduler/lib/`)

- **`db.ts`** — Drizzle ORM client connecting to Neon Postgres
- **`pdf-parser.ts`** — Calls the Python microservice (`PDF_SERVICE_URL/parse`) to get raw text, then `parseRawText()` extracts invoice rows (routes, dates, amounts, client details). Handles "KL - KLIA" (one-way) vs "KL - Malacca - KL" (round-trip) detection.
- **`van-assignment.ts`** — `smartAssignVan(travelDate, fromLocation)` does two-pass allocation: (1) continuity pass — find a van whose last booking ended at this trip's origin the day before and is free today; (2) fallback — first van free on travelDate; (3) final fallback — first van regardless.

### Database Schema (`van-scheduler/drizzle/schema.ts`)

Two tables:
- **`vans`**: `id`, `vanNumber` (unique plate), `driverName`, `driverContact`
- **`bookings`**: invoice data extracted from PDFs — `invoiceNo`, `travelDate`, `fromLocation`, `toLocation`, `isRoundTrip`, `amount`, `passengerCount`, `myrPerVehicle`, `paidStatus`, `clientDetails`, plus `vanId` (FK), `manualChange`, `inHouseOrOutsourced`, `outsourcedCompany`, `overtime`, `introducer`

### PDF Microservice (`van-scheduler/pdf-service/`)

Standalone Flask app. `POST /parse` accepts raw PDF bytes, returns extracted text using PyMuPDF (`fitz`) with spatial sorting (top-to-bottom, left-to-right). Deployed to Railway. `GET /health` used by the frontend to detect cold starts.

## Key Design Decisions

- **Node.js runtime** is forced for `/api/upload` in `next.config.ts` because `pdf-parse` requires Node.js `fs`/`Buffer`. Most other routes use the default Edge-compatible runtime.
- **PyMuPDF lives in Python** because it has no JS equivalent; the Next.js app calls it via HTTP.
- **`manualChange` flag** on bookings prevents auto-reassignment from overwriting user edits during re-uploads.
- **Van assignment continuity logic** optimizes for real-world driver routing: prefer the van already at the pickup location from the prior day.
