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

export const items = Object.keys(allItems) as ItemType[];

export const allTags = [
  { id: "no-license-required", label: "ライセンス表記不要" },
  { id: "available-for-commercial-use", label: "商用利用可能" },
  { id: "modifiable", label: "改変可能" },
  { id: "no-license-inheritance-required", label: "ライセンス継承不要" },
  { id: "free", label: "無料" },
  { id: "video", label: "ビデオ" },
  { id: "public-domain", label: "パブリックドメイン" },
  { id: "mit-license", label: "MIT-License" },
  { id: "cc-by-nd-4.0", label: "CC BY-ND 4.0" },
  { id: "cc-by-sa-4.0", label: "CC BY-SA 4.0" },
  { id: ".pdf", label: ".pdf" },
  { id: ".svg", label: ".svg" },
  { id: ".png", label: ".png" },
  { id: ".mp3", label: ".mp3" },
  { id: ".ai", label: ".ai" },
  { id: ".eps", label: ".eps" },
  { id: "figma", label: "Figma" },
] as const;

export const allCategory = [
  {
    id: "illustrations",
    label: "イラスト",
  },
  {
    id: "photos",
    label: "写真",
  },
  {
    id: "icons",
    label: "アイコン",
  },
  {
    id: "colors",
    label: "色",
  },
  {
    id: "fonts",
    label: "フォント",
  },
  {
    id: "templates",
    label: "テンプレート",
  },
] as const;
