import { Copy, Mail, Phone } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import SocialIcons from "@/components/data-display/SocialIcons";
import { copyTextToClipboard } from "@/lib/utils";
import { useState } from "react";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState(null);

  const handleCopyClick = async (text, type) => {
    await copyTextToClipboard(text)
      .then(() => {
        setIsCopied(true);
        setCopiedValueType(type);
        let timoutId = setTimeout(() => {
          setIsCopied(false);
          setCopiedValueType(null);
          clearTimeout(timoutId);
        }, 1500);
      })
      .catch(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        alert("Unable to copy!");
      });
  };

  return (
    <Container id="contact" className="bg-transparent">
      <div className="flex items-center flex-col gap-4">
        <div className="text-center font-medium text-sm text-normal px-5 py-1 rounded-xl bg-gray-200 dark:bg-[#374151]">
          Get in touch
        </div>
        <p className="text-normal md:text-xl text-lg text-center max-w-xl">
          What’s next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex flex-col items-center md:gap-4">
        <div className="flex items-center gap-4 md:gap-5 relative">
          {isCopied && copiedValueType == "email" && (
            <div className="text-center font-medium text-sm text-normal px-3 py-1 rounded-xl bg-gray-200 dark:bg-[#374151] absolute right-[-15px] top-[-30px]">
              Copied!
            </div>
          )}
          <Mail className="text-normal md:h-8 md:w-8" />
          <h5 className="text-lg md:text-4xl font-semibold">
            othmaneedakiri99@gmail.com
          </h5>
          <Button
            onClick={() =>
              handleCopyClick("othmaneedakiri99@gmail.com", "email")
            }
            size="icon"
            variant="outline"
            className="border-none bg-transparent"
          >
            <Copy className="text-normal md:h-8 md:w-8" />
          </Button>
        </div>
        <div className="flex items-center gap-4 md:gap-5 relative">
          {isCopied && copiedValueType == "phone" && (
            <div className="text-center font-medium text-sm text-normal px-3 py-1 rounded-xl bg-gray-200 dark:bg-[#374151] absolute right-[-15px] top-[-30px]">
              Copied!
            </div>
          )}
          <Phone className="text-normal md:h-8 md:w-8" />
          <h5 className="text-lg md:text-4xl font-semibold">+212 673993884</h5>
          <Button
            onClick={() => handleCopyClick("+212 673993884", "phone")}
            size="icon"
            variant="outline"
            className="border-none bg-transparent"
          >
            <Copy className="text-normal md:h-8 md:w-8" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-base text-normal">
          You may also find me on these platforms!
        </p>
        <SocialIcons />
      </div>
    </Container>
  );
};

export default Contact;
