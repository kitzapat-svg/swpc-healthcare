'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function NavigationProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  // When pathname or searchParams change, navigation has arrived!
  useEffect(() => {
    if (isNavigating) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsNavigating(false);
        setVisible(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    let progressTimer: NodeJS.Timeout;

    const handleAnchorClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const targetAttr = target.getAttribute('target');
      const download = target.getAttribute('download');

      // Ignore external, target blank, download, or modifier keys
      if (
        !href ||
        targetAttr === '_blank' ||
        download !== null ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.defaultPrevented
      ) {
        return;
      }

      // Check if internal navigation
      const isInternal =
        href.startsWith('/') ||
        href.startsWith(window.location.origin);

      if (!isInternal) return;

      // Ignore hash-only clicks or same exact route
      const currentUrl = new URL(window.location.href);
      const targetUrl = new URL(href, window.location.origin);

      if (
        targetUrl.pathname === currentUrl.pathname &&
        targetUrl.search === currentUrl.search
      ) {
        return;
      }

      // Trigger immediate top progress bar
      setVisible(true);
      setIsNavigating(true);
      setProgress(25);

      clearInterval(progressTimer);
      progressTimer = setTimeout(() => {
        setProgress((prev) => (prev < 75 ? 75 : prev));
      }, 200);
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick, { capture: true });
      clearTimeout(progressTimer);
    };
  }, []);

  // Safety fallback: auto-complete after 7 seconds if navigation takes unusually long
  useEffect(() => {
    if (!isNavigating) return;
    const safetyTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsNavigating(false);
        setVisible(false);
        setProgress(0);
      }, 200);
    }, 7000);

    return () => clearTimeout(safetyTimer);
  }, [isNavigating]);

  if (!visible && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-1 bg-transparent overflow-hidden"
    >
      <div
        className="h-full bg-gradient-to-r from-teal-500 via-primary to-emerald-400 shadow-[0_0_8px_rgba(13,148,136,0.6)] transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          opacity: isNavigating ? 1 : 0,
        }}
      />
    </div>
  );
}
