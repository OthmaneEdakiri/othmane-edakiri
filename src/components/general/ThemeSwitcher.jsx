import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { MoonStar, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="border-none bg-transparent"
      onClick={toggleTheme}
    >
      {theme === "light" ? <MoonStar /> : <Sun />}
    </Button>
  );
};

export default ThemeSwitcher;
