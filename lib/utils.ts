import { allTags } from "@/data";
import { Tag } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTagLabel = (id: Tag) => {
  return allTags.find((tag) => tag.id === id)?.label ?? "";
};
