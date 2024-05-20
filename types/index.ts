import { allCategory, allTags } from "@/data";

export type Tag = (typeof allTags)[number]["id"];

export type Item = {
  id: string;
  title: string;
  href: string;
  tags: Tag[];
};

export type Category = keyof typeof allCategory;
