// @ts-ignore -- TypeScript does not resolve HTTPS module specifiers
import { lazy, Suspense } from 'react';
const FooterUrl = 'https://framer.com/m/Footer-3Fy7ch.js';
const Footer = lazy(() => import(FooterUrl as any));
export default function FramerFooter() {
  return <Suspense fallback={null}><Footer /></Suspense>;
}
