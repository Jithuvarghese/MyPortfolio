import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { useAppPreferences } from '../context/AppPreferencesContext';

export default function Home() {
  const { dictionary } = useAppPreferences();

  return (
    <>
      <Head>
        <title>{dictionary.meta.title}</title>
        <meta name="description" content={dictionary.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative z-0 bg-bg">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <footer className="border-t border-line">
          <div className="mx-auto flex w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
            <p className="font-mono text-xs text-muted">
              © {new Date().getFullYear()} Jithu Varghese
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
