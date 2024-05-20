"use client";

import { Button } from "@/components/ui/button";
import { allCategory } from "@/data";
import { cn, hasCategory } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const SideBar = () => {
  const idParam = useParams();

  return (
    <div className="hidden lg:flex w-64 border-r flex-col p-4">
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
  );
};

export default SideBar;
