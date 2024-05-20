import { Button } from "@/components/ui/button";
import { allCategory } from "@/data";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="hidden lg:flex w-64 border-r flex-col p-4">
      {allCategory.map((category) => (
        <Button className="justify-start" variant="ghost" key={category.id} asChild>
          <Link href={`/${category.id}`}>{category.label}</Link>
        </Button>
      ))}
    </div>
  );
};

export default SideBar;
