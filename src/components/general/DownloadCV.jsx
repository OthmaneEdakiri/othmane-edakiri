import React from "react";
import { Button } from "@/components/ui/button";

const DownloadCV = () => {
  return (
    <Button
      size="sm"
      className="rounded-xl text-[16px]"
      onClick={() => window?.open("/files/edakiri-cv-2024.pdf", "_blank")}
    >
      Download CV
    </Button>
  );
};

export default DownloadCV;
