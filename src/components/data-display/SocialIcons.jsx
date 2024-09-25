import { SOCIAL_LINKS } from "@/lib/data";
import React from "react";
import { Button } from "@/components/ui/button";

const SocialIcons = () => {
  return (
    <div className="flex gap-1 items-center text-normal">
      {SOCIAL_LINKS.map((social, index) => (
        <Button
          key={index}
          size="icon"
          variant="outline"
          className="border-none"
        >
          <a
            className="h-full w-full flex items-center justify-center"
            target="_blank"
            href={social.url}
          >
            {<social.icon />}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialIcons;
