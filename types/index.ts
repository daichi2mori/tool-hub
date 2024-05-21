import { allCategory } from "@/data/categories";
import { allTags } from "@/data/tags";

export type Tag = (typeof allTags)[number]["id"];

export type Categories = (typeof allCategory)[number]["id"];

export type Item = {
  id: string;
  title: string;
  href: string;
  category: Categories;
  tags: Tag[];
};
