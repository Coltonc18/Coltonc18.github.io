// @ts-ignore -- TypeScript does not resolve HTTPS module specifiers
import { lazy, Suspense } from 'react';

// URL in a function to prevent Rollup static analysis and defer ESM loading to browser
function loadFooter() {
  return import(/* @vite-ignore */ 'https://framer.com/m/Footer-3Fy7ch.js');
}
const Footer = lazy(loadFooter);

export default function FramerFooter() {
  return <Suspense fallback={null}><Footer /></Suspense>;
}
