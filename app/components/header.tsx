import { ModeToggle } from "@/components/mode-toggle";
import MobileNav from "./mobile-nav";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center justify-center gap-3">
          <div className="lg:hidden">
            <MobileNav />
          </div>
          <p className="font-bold text-lg">ToolHub</p>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
