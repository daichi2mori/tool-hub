import { Button } from "@/components/ui/button";
import { TAGS } from "@/lib/tags";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="hidden lg:flex w-64 border-r flex-col p-4">
      {TAGS.map((tag) => (
        <Button className="justify-start" variant="ghost" key={tag.id} asChild>
          <Link href={`/${tag.id}`}>{tag.label}</Link>
        </Button>
      ))}
    </div>
  );
};

export default SideBar;
