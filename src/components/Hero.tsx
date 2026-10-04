import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { gsap } from "../utils/gsap";
import { useAppPreferences } from "../context/AppPreferencesContext";
import IconWrapper from "./IconWrapper";
import { FiDownload } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const { dictionary } = useAppPreferences();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Gentle scroll fade for the hero copy
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(".hero-text", {
      y: 60,
      opacity: 0,
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section id="hero" className="relative mx-auto w-full overflow-hidden">
      <div
        className={`${styles.paddingX} mx-auto flex w-full max-w-7xl flex-col gap-10 pb-20 pt-28 md:min-h-screen md:flex-row md:items-end md:justify-between md:gap-12 md:pb-24 md:pt-32`}
      >
        {/* Mobile: photo on top */}
        <div className="md:hidden">
          <div className="h-[200px] w-[160px] overflow-hidden border border-line bg-surface">
            <img
              src="/images/profile.png"
              alt="Jithu Varghese"
              className="profile-photo h-full w-full origin-top scale-[1.2] object-cover object-top"
            />
          </div>
        </div>

        <div className="hero-text relative z-10 min-w-0 flex-1 md:pe-[40%] lg:pe-[44%]">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className={styles.heroHeadText}
          >
            {dictionary.hero.greeting} Jithu
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            <p className={`${styles.heroSubText} mt-8 max-w-2xl text-fg`}>{dictionary.hero.role}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {dictionary.hero.summary}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-solid">
                {dictionary.hero.connect}
              </a>
              <a href="/assets/Jithu_Varghese_Resume.pdf" download className="btn btn-outline">
                <IconWrapper icon={FiDownload} className="flex" />
                {dictionary.hero.resume}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Desktop: large cut-out photo filling the right side, flush to the bottom */}
        <div className="absolute bottom-0 end-0 top-16 hidden w-[38%] max-w-[680px] md:block lg:w-[46%]">
          <img
            src="/images/profile.png"
            alt="Jithu Varghese"
            className="profile-photo h-full w-full object-cover object-top"
          />
        </div>      </div>
    </section>
  );
};

export default Hero;
