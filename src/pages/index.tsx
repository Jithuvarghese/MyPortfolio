import Head from 'next/head';
import dynamic from 'next/dynamic';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { useAppPreferences } from '../context/AppPreferencesContext';

// Dynamically import 3D components with no SSR and error boundary
const StarsCanvasWithNoSSR = dynamic(
  () => import('../components/canvas/Stars').then((mod) => ({ default: mod.default })),
  { ssr: false }
);

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
      <main className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <div className="relative z-0">
          <Contact />
          {/* Wrap in error boundary */}
          <ErrorBoundary fallback={<div>{dictionary.skills.heading}</div>}>
            <StarsCanvasWithNoSSR />
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<{fallback: React.ReactNode, children: React.ReactNode}> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: any, errorInfo: any) {
    console.error("Canvas Error:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    
    return this.props.children;
  }
} 