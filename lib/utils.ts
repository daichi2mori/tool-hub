import { allTags } from "@/data";
import { Tag } from "@/types";
import { type ClassValue, clsx } from "clsx";
import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTagLabel = (id: Tag) => {
  return allTags.find((tag) => tag.id === id)?.label ?? "";
};

export const hasCategory = (idParams: Params, category: string) => {
  if (!idParams.id) return true;

  if (idParams.id === category) return true;

  return false;
};
