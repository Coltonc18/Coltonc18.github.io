// @ts-ignore -- TypeScript does not resolve HTTPS module specifiers
import { lazy, Suspense } from 'react';

// URL in a function to prevent Rollup static analysis and defer ESM loading to browser
function loadExperienceTitle() {
  return import(/* @vite-ignore */ 'https://framer.com/m/Experience-Title-Component-N8yTej.js');
}
const ExperienceTitle = lazy(loadExperienceTitle);

interface Props {
  title?: string;
  subtitle?: string;
}

export default function FramerExperienceTitle({ title, subtitle }: Props) {
  return (
    <Suspense fallback={null}>
      <ExperienceTitle title={title} subtitle={subtitle} />
    </Suspense>
  );
}
