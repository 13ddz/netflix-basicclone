import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Bem-vindo ao PetLar
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Encontre tudo para seu pet: rações premium, brinquedos divertidos e 
              ajude na adoção de animais que procuram um lar cheio de amor.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => onNavigate("products")}>
                Ver Produtos
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate("adoption")}>
                Adotar um Pet
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YzliNzRzdTczM2dqNjBxb2RxYXY0ajdzb2NiZGhudzZjbG9nbTJlMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MDJ9IbxxvDUQM/giphy.gif"
              alt="Cachorro e gato brincando juntos"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
