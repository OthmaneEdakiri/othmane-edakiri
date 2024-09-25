import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { NAV_LINKS } from "@/lib/data";
import { useEffect, useState } from "react";
import DownloadCV from "@/components/general/DownloadCV";
import ThemeSwitcher from "@/components/general/ThemeSwitcher";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () => setSize(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (size && size > 767 && isSheetOpen) {
      setIsSheetOpen(false);
    }
  }, [size, isSheetOpen]);

  return (
    <div className="fixed w-full left-0 top-0 backdrop-blur-lg z-30">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex items-center justify-between h-[62px]">
          <h1 className="text-gray md:text-3xl text-2xl font-bold tracking-[-0.02em]">
            &lt;OE /&gt;
          </h1>
          <div className="md:flex items-center gap-6 hidden">
            <ul className="flex gap-6 text-gray transition-colors font-medium">
              {NAV_LINKS.map((navLink, index) => (
                <li key={index}>
                  <a href={navLink.href}>{navLink.label}</a>
                </li>
              ))}
            </ul>
            <div className="h-6 w-0.5 bg-gray-100"></div>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <DownloadCV />
            </div>
          </div>
          <div className="md:hidden block">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="border-none">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="p-0">
                <div className="p-4 border-b flex items-center justify-between">
                  <DialogTitle className="text-gray text-2xl font-bold tracking-[-0.02em]">
                    &lt;OE /&gt;
                  </DialogTitle>
                  <SheetClose asChild>
                    <Button
                      size="icon"
                      variant="outline"
                      className="border-none"
                    >
                      <X />
                    </Button>
                  </SheetClose>
                </div>
                <ul className="p-4 flex flex-col gap-4 font-semibold border-b">
                  {NAV_LINKS.map((navLink, index) => (
                    <li key={index}>
                      <a
                        onClick={() => {
                          const timeoutId = setTimeout(() => {
                            setIsSheetOpen(false);
                            clearTimeout(timeoutId);
                          }, 500);
                        }}
                        href={navLink.href}
                      >
                        {navLink.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="p-4 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h3>Switch Theme</h3>
                    <ThemeSwitcher />
                  </div>
                  <DownloadCV />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
