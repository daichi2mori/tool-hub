import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { allCategory } from "@/data/categories";
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
          {allCategory.map((category) => (
            <Button className="justify-start" variant="ghost" key={category.id} asChild>
              <SheetClose asChild>
                <Link href={`/${category.id}`}>{category.label}</Link>
              </SheetClose>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
