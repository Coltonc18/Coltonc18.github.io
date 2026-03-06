// @ts-ignore -- TypeScript does not resolve HTTPS module specifiers
import { lazy, Suspense } from 'react';
const NavUrl = 'https://framer.com/m/Top-Navigation-XPU7n1.js';
const TopNav = lazy(() => import(NavUrl as any));
export default function FramerNav() {
  return <Suspense fallback={null}><TopNav /></Suspense>;
}
