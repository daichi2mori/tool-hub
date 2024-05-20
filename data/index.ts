import { illustrations } from "./illustrations";
import { photos } from "./photos";
import { icons } from "./icons";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { templates } from "./templates";

export const allItems = {
  illustrations,
  photos,
  icons,
  colors,
  fonts,
  templates,
} as const;

export type ItemType = keyof typeof allItems;
