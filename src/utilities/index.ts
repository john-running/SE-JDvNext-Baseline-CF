import { ComponentParameter } from '@uniformdev/canvas';

export interface EnhanceParameter<T> {
  parameter: ComponentParameter<T>;
}

export const togglePageScroll = (isHiddenManual?: boolean): void => {
  const html = document.querySelector('html');
  if (!html) return;
  const isHidden = isHiddenManual ?? html.style.overflow === 'hidden';
  html.style.overflow = isHidden ? 'auto' : 'hidden';
};

export const getFormattedPath = (location: string, slug?: string | string[] | null): string => {
  const slugString = Array.isArray(slug) ? slug.join('/') : slug;
  const path = location.endsWith('/') ? location : `${location}/`;
  return slugString ? `${path}${slugString}` : path;
};

export const getFormattedLink = (link: string): string => {
  if (!link) return '';
  return link?.startsWith('http') ? link : `https://${link}`;
};
