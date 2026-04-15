export interface Workshop {
  id: string;
  title: string;
  price: number;
  description: string;
  duration: string;
  tag: string;
}

export const workshops: Workshop[] = [
  {
    id: "totebag-painting",
    title: "Totebag Painting",
    price: 120,
    description: "Paint your own canvas totebag with acrylic colours. Take home a one-of-a-kind bag.",
    duration: "2 hrs",
    tag: "Painting",
  },
  {
    id: "sand-painting",
    title: "Sand Painting",
    price: 120,
    description: "Layer coloured sand to create mesmerising landscapes inside a glass frame.",
    duration: "1.5 hrs",
    tag: "Painting",
  },
  {
    id: "batik-canting-totebag",
    title: "Batik Canting Totebag",
    price: 125,
    description: "Use traditional canting tool to wax and dye your own batik pattern on a totebag.",
    duration: "2.5 hrs",
    tag: "Batik",
  },
  {
    id: "batik-colouring",
    title: "Batik Colouring",
    price: 80,
    description: "Colour pre-waxed batik fabric with vibrant textile dyes. Great for beginners.",
    duration: "1.5 hrs",
    tag: "Batik",
  },
  {
    id: "succulent-candle",
    title: "Succulent Candle",
    price: 180,
    description: "Sculpt lifelike succulent plants from wax and arrange them in a candle jar.",
    duration: "3 hrs",
    tag: "Candle",
  },
  {
    id: "pudding-candle",
    title: "Pudding Candle",
    price: 150,
    description: "Pour and style adorable pudding-shaped candles with jelly wax toppers.",
    duration: "2.5 hrs",
    tag: "Candle",
  },
];
