import React, { useEffect } from "react";
import { styles } from "../styles";
import { gsap } from "../utils/gsap";
import { useAppPreferences } from "../context/AppPreferencesContext";

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const lineVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { 
    height: "70px", 
    opacity: 1,
    transition: { duration: 1, delay: 0.5, ease: "easeOut" }
  }
};

const Hero = () => {
  const { dictionary } = useAppPreferences();

  useEffect(() => {
    // Parallax effect on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(".hero-text", {
      y: 100,
      opacity: 0,
    });
  }, []);

  return (
    <section id="hero" className="relative w-full md:min-h-screen mx-auto overflow-hidden">
      {/* Minimal background with subtle gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-[#042f2e] opacity-5 blur-[100px] animate-pulse" style={{ animationDuration: '15s' }} />
        <div className="absolute bottom-[-5%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-[#042f2e] opacity-5 blur-[100px] animate-pulse" style={{ animationDuration: '20s' }} />
      </div>

      <div
        className={`${styles.paddingX} relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 z-10 pt-28 pb-12 md:pt-36 md:pb-16`}
      >
        {/* Top on mobile: profile photo */}
        <div className="flex md:hidden flex-shrink-0 items-center justify-center">
          <div className="relative w-[160px] h-[200px] rounded-2xl overflow-hidden border-2 border-[#14B8A6]/40 shadow-[0_0_20px_rgba(20,184,166,0.15)]">
            <img
              src="/images/profile.jpg"
              alt="Jithu Varghese"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030c0c]/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* Left: decorative line + text */}
        <div className="flex flex-row items-start gap-4 md:gap-6 flex-1">
          <div className="hidden sm:flex flex-col justify-center items-center mt-5">
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#14B8A6] to-transparent" />
          </div>

          <div className="z-10 fade-in w-full">
            <h1 className={`${styles.heroHeadText}`}>
              <span className="text-white">{dictionary.hero.greeting}</span> <span className="text-[#14B8A6]">Jithu</span>
            </h1>
            <p className={`${styles.heroSubText} mt-4 text-white-100 opacity-80`}>
              {dictionary.hero.role}
              <br className="sm:block hidden" />
              <span className="mt-3 block text-sm md:text-base leading-relaxed text-[#aaa6c3]">
                {dictionary.hero.summary}
              </span>
            </p>

            <div className="mt-6 md:mt-10 flex flex-wrap gap-4 md:gap-5">
              <a href="#contact" className="button-primary">
                {dictionary.hero.connect}
              </a>
              <a
                href="/assets/Jithu_Varghese_Resume.pdf"
                download
                className="border border-[#14B8A6] py-[0.6rem] px-6 rounded-md text-sm text-white transition-all duration-300 inline-flex items-center gap-2 hover:bg-[#14B8A6]/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {dictionary.hero.resume}
              </a>
            </div>
          </div>
        </div>

        {/* Right: profile photo — desktop only */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center">
          <div className="relative w-[240px] h-[300px] lg:w-[300px] lg:h-[380px] rounded-2xl overflow-hidden border-2 border-[#14B8A6]/40 shadow-[0_0_40px_rgba(20,184,166,0.15)]">
            <img
              src="/images/profile.jpg"
              alt="Jithu Varghese"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030c0c]/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
