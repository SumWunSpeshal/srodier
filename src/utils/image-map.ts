import bytediver from '../assets/bytediver.svg';
import db from '../assets/db.png';
import frameworks from '../assets/frameworks.png';
import hosting from '../assets/hosting.png';
import neoskop from '../assets/neoskop.svg';
import portrait from '../assets/portrait.png';
import styling from '../assets/styling.png';
import ts from '../assets/ts.png';
import wendweb from '../assets/wendweb.svg';

export const imageMap = {
  db,
  frameworks,
  hosting,
  styling,
  ts,
  wendweb,
  neoskop,
  bytediver,
  portrait,
} as const satisfies Record<string, ImageMetadata>;

export function getImage(key: string) {
  return imageMap[key as keyof typeof imageMap];
}
