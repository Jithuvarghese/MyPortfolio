// Short fade + 8px rise. Signatures are kept so existing call sites keep working,
// but direction / spring options are intentionally ignored for a calmer feel.
const ease = [0.22, 1, 0.36, 1] as const;

const rise = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease, delay, duration },
  },
});

export const textVariant = (delay?: number) => rise(delay ?? 0, 0.5);

export const fadeIn = (_direction?: string, _type?: string, delay = 0, duration = 0.5) =>
  rise(delay, Math.min(duration, 0.6));

export const zoomIn = (delay = 0, duration = 0.5) => rise(delay, Math.min(duration, 0.6));

export const slideIn = (_direction?: string, _type?: string, delay = 0, duration = 0.5) =>
  rise(delay, Math.min(duration, 0.6));

export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren ?? 0.08,
      delayChildren: delayChildren || 0,
    },
  },
});
