import { Tag } from "@/types/tag";

export type Item = {
  id: string;
  title: string;
  href: string;
  tags: Tag[];
};
