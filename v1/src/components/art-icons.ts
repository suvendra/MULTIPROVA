// Merged registry of colorful placeholder art icons used across the site.
// Components should render these via <ArtIcon name="..." /> — if a real asset
// exists at /public/icons/<name>.png|svg|webp it is served instead.

import { servicesArt } from './art-icons.services';
import { servicesArt2 } from './art-icons.services2';
import { servicesArt3 } from './art-icons.services3';
import { uiArt } from './art-icons.ui';
import { uiArt2 } from './art-icons.ui2';

export const artIcons: Record<string, string> = {
  ...servicesArt,
  ...servicesArt2,
  ...servicesArt3,
  ...uiArt,
  ...uiArt2,
};
