// Slow fade + 16px rise. Signatures are kept so existing call sites keep working,
// but direction / spring options are intentionally ignored for a calmer feel.
const ease = [0.22, 1, 0.36, 1] as const;

const rise = (delay = 0, duration = 0.9) => ({
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease, delay, duration },
  },
});

export const textVariant = (delay?: number) => rise(delay ?? 0);

export const fadeIn = (_direction?: string, _type?: string, delay = 0, _duration?: number) =>
  rise(delay);

export const zoomIn = (delay = 0, _duration?: number) => rise(delay);

export const slideIn = (_direction?: string, _type?: string, delay = 0, _duration?: number) =>
  rise(delay);

export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren ?? 0.08,
      delayChildren: delayChildren || 0,
    },
  },
});

// Spread onto a motion element that has its own variants so it reveals when it scrolls into view
// (instead of when its whole section first appears).
export const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: "some" as const, margin: "0px 0px -8% 0px" },
};
