import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Loader from '@/components/Loader';
import { AppPreferencesProvider } from '@/context/AppPreferencesContext';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppPreferencesProvider>
      <MotionConfig reducedMotion="user">
        {isLoading ? <Loader /> : <Component {...pageProps} />}
      </MotionConfig>
    </AppPreferencesProvider>
  );
}
