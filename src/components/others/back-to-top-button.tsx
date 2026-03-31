'use client';

import { ChevronUpIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <Button
        variant="default"
        onClick={scrollToTop}
        className={'size-10 fixed bottom-4 right-2 bg-brand-800 hover:bg-brand-700'}
    >
        <ChevronUpIcon className="size-6" />
    </Button>
  );
}