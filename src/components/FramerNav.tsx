// @ts-ignore -- TypeScript does not resolve HTTPS module specifiers
import { lazy, Suspense } from 'react';

// URL in a function to prevent Rollup static analysis and defer ESM loading to browser
function loadNav() {
  return import(/* @vite-ignore */ 'https://framer.com/m/Top-Navigation-XPU7n1.js');
}
const TopNav = lazy(loadNav);

export default function FramerNav() {
  return <Suspense fallback={null}><TopNav /></Suspense>;
}
