import { Accessibility } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface AccessibilityButtonProps {
  onClick: () => void;
}

export function AccessibilityButton({ onClick }: AccessibilityButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={onClick}
            size="icon"
            className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Abrir menu de acessibilidade (Alt + A)"
          >
            <Accessibility className="h-6 w-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Acessibilidade (Alt + A)</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
