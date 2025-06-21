import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to handle basePath for static assets
export function getAssetPath(path: string): string {
  // In static export, we need to prepend the basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''
  return `${basePath}${path}`
}
