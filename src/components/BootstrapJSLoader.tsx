'use client';

import { useEffect } from 'react';

export default function BootstrapJSLoader() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/bootstrap.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
