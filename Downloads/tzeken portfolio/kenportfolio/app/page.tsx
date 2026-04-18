import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { StatsBar } from '@/components/StatsBar'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Projects } from '@/components/Projects'
import { TechStack } from '@/components/TechStack'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { SnapSection } from '@/components/SnapSection'
import { DotNav } from '@/components/DotNav'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <DotNav />

      <SnapSection>
        <Hero />
        <StatsBar />
      </SnapSection>

      <SnapSection>
        <About />
      </SnapSection>

      <SnapSection>
        <Services />
      </SnapSection>

      <SnapSection>
        <Projects />
      </SnapSection>

      <SnapSection>
        <TechStack />
      </SnapSection>

      <SnapSection>
        <Testimonials />
      </SnapSection>

      <SnapSection>
        <Contact />
        <footer className="border-t border-[#222] py-8 text-center">
          <p className="font-mono text-xs text-white/30">
            © 2026 Teh Tze Ken. Built with Next.js + too much caffeine.{' '}
            <span className="text-[#00f5ff]/50">George Town, Penang, Malaysia</span>
          </p>
        </footer>
      </SnapSection>
    </main>
  )
}
