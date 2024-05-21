"use client";

import { Button } from "@/components/ui/button";
import { allCategory } from "@/data/categories";
import { cn, hasCategory } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
// すべて表示させるので、ホーム画面ではアクティブ判定いらない
const SideBar = () => {
  const idParam = useParams();

  return (
    <div className="hidden lg:block lg:sticky top-16 z-30 h-[calc(100vh-16rem)] border-r p-4">
      <div className="flex flex-col gap-2">
        {allCategory.map((category) => (
          <Button
            className={cn("justify-start", hasCategory(idParam, category.id) && "bg-accent")}
            variant="ghost"
            key={category.id}
            asChild
          >
            <Link href={`/${category.id}`}>{category.label}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
