import path from 'path';

export const MODE = {
  prod: 'prod',
  dev: 'dev',
} as const;

export const BUILD_DIR = path.resolve(__dirname, '..', 'build');
export const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
export const STATIC_DIR = path.resolve(__dirname, '..', 'static');
