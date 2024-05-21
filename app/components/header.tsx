import { ModeToggle } from "@/components/mode-toggle";
import MobileNav from "./mobile-nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AppConfig } from "@/app.config";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center justify-center gap-3">
          <div className="lg:hidden">
            <MobileNav />
          </div>
          <Button variant="ghost" className="text-lg font-semibold">
            <Link href="/" replace>
              {AppConfig.title}
            </Link>
          </Button>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
