// @ts-ignore -- TypeScript does not resolve HTTPS module specifiers
import { lazy, Suspense } from 'react';

// URL in a function to prevent Rollup static analysis and defer ESM loading to browser
function loadSocialIcon() {
  return import(/* @vite-ignore */ 'https://framer.com/m/Social-Media-Icon-mppkW9.js');
}
const SocialIcon = lazy(loadSocialIcon);

interface Props {
  link?: string;
  icon?: string;
}

export default function FramerSocialIcon({ link, icon }: Props) {
  return (
    <Suspense fallback={null}>
      <SocialIcon link={link} icon={icon} />
    </Suspense>
  );
}
