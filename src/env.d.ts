/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import 'react';
interface ImportMetaEnv {
  readonly PUBLIC_VERCEL_ANALYTICS_ID: string;
  readonly MAIL_HOST: string;
  readonly MAIL_USER: string;
  readonly MAIL_PASSWORD: string;
  readonly MAIL_TO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'react' {
  export interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
