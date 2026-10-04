import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppPreferences } from "../context/AppPreferencesContext";

const Loader = () => {
  const { dictionary } = useAppPreferences();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg px-6"
      role="status"
      aria-live="polite"
    >
      <div className="w-full max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-[40px] font-bold leading-none tracking-display text-fg xs:text-[52px] sm:text-7xl lg:text-8xl"
        >
          Jithu Varghese
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 font-mono text-xs uppercase tracking-label text-muted"
        >
          {dictionary.loader.role}
        </motion.p>
        <div className="mt-10 h-px w-full bg-line">
          <div
            className="h-px bg-fg transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
