import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Eye, 
  Type, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  X,
  Accessibility,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from "lucide-react";
import { toast } from "sonner@2.0.3";

interface AccessibilityMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccessibilityMenu({ isOpen, onClose }: AccessibilityMenuProps) {
  const [fontSize, setFontSize] = useState<"normal" | "large" | "extra-large">("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [audioDescription, setAudioDescription] = useState(false);

  const increaseFontSize = () => {
    if (fontSize === "normal") {
      setFontSize("large");
      document.body.classList.add("large-text");
      document.body.classList.remove("extra-large-text");
      toast.success("Tamanho da fonte aumentado");
    } else if (fontSize === "large") {
      setFontSize("extra-large");
      document.body.classList.remove("large-text");
      document.body.classList.add("extra-large-text");
      toast.success("Tamanho da fonte aumentado");
    }
  };

  const decreaseFontSize = () => {
    if (fontSize === "extra-large") {
      setFontSize("large");
      document.body.classList.add("large-text");
      document.body.classList.remove("extra-large-text");
      toast.success("Tamanho da fonte diminuído");
    } else if (fontSize === "large") {
      setFontSize("normal");
      document.body.classList.remove("large-text");
      document.body.classList.remove("extra-large-text");
      toast.success("Tamanho da fonte diminuído");
    }
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle("high-contrast");
    toast.success(!highContrast ? "Alto contraste ativado" : "Alto contraste desativado");
  };

  const toggleAudioDescription = () => {
    setAudioDescription(!audioDescription);
    toast.success(
      !audioDescription 
        ? "Audiodescrição ativada (simulado)" 
        : "Audiodescrição desativada"
    );
  };

  const resetSettings = () => {
    setFontSize("normal");
    setHighContrast(false);
    setAudioDescription(false);
    document.body.classList.remove("large-text", "extra-large-text", "high-contrast");
    toast.success("Configurações de acessibilidade resetadas");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center gap-2">
            <Accessibility className="h-5 w-5" />
            Acessibilidade
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Fechar menu de acessibilidade"
          >
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Tamanho da Fonte */}
          <div>
            <h3 className="mb-3 flex items-center gap-2">
              <Type className="h-4 w-4" />
              Tamanho da Fonte
            </h3>
            <div className="flex gap-2">
              <Button
                onClick={decreaseFontSize}
                variant="outline"
                disabled={fontSize === "normal"}
                className="flex-1"
                aria-label="Diminuir tamanho da fonte"
              >
                <ZoomOut className="h-4 w-4 mr-2" />
                Diminuir
              </Button>
              <Button
                onClick={increaseFontSize}
                variant="outline"
                disabled={fontSize === "extra-large"}
                className="flex-1"
                aria-label="Aumentar tamanho da fonte"
              >
                <ZoomIn className="h-4 w-4 mr-2" />
                Aumentar
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Atual: {fontSize === "normal" ? "Normal" : fontSize === "large" ? "Grande" : "Extra Grande"}
            </p>
          </div>

          {/* Alto Contraste */}
          <div>
            <h3 className="mb-3 flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Contraste
            </h3>
            <Button
              onClick={toggleHighContrast}
              variant={highContrast ? "default" : "outline"}
              className="w-full"
              aria-label={highContrast ? "Desativar alto contraste" : "Ativar alto contraste"}
              aria-pressed={highContrast}
            >
              {highContrast ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
              {highContrast ? "Alto Contraste Ativo" : "Ativar Alto Contraste"}
            </Button>
          </div>

          {/* Audiodescrição */}
          <div>
            <h3 className="mb-3 flex items-center gap-2">
              {audioDescription ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              Audiodescrição
            </h3>
            <Button
              onClick={toggleAudioDescription}
              variant={audioDescription ? "default" : "outline"}
              className="w-full"
              aria-label={audioDescription ? "Desativar audiodescrição" : "Ativar audiodescrição"}
              aria-pressed={audioDescription}
            >
              {audioDescription ? <Volume2 className="h-4 w-4 mr-2" /> : <VolumeX className="h-4 w-4 mr-2" />}
              {audioDescription ? "Audiodescrição Ativa" : "Ativar Audiodescrição"}
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Descrições em áudio das imagens e conteúdo
            </p>
          </div>

          {/* Atalhos de Teclado */}
          <div>
            <h3 className="mb-3">Atalhos de Teclado</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><kbd className="px-2 py-1 bg-secondary rounded">Tab</kbd> - Navegar entre elementos</p>
              <p><kbd className="px-2 py-1 bg-secondary rounded">Enter</kbd> - Ativar elemento</p>
              <p><kbd className="px-2 py-1 bg-secondary rounded">Esc</kbd> - Fechar menus</p>
              <p><kbd className="px-2 py-1 bg-secondary rounded">Alt + A</kbd> - Abrir acessibilidade</p>
            </div>
          </div>

          {/* Resetar */}
          <div className="pt-4 border-t">
            <Button
              onClick={resetSettings}
              variant="outline"
              className="w-full"
              aria-label="Resetar todas as configurações de acessibilidade"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Resetar Configurações
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
