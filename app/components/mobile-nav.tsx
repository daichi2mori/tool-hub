import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TAGS } from "@/lib/tags";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col">
          {TAGS.map((tag) => (
            <Button className="justify-start" variant="ghost" key={tag.id}>
              <SheetClose asChild>
                <Link href={`/${tag.id}`}>{tag.label}</Link>
              </SheetClose>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
