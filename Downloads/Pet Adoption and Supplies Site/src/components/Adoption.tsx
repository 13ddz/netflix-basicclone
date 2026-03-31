import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, MapPin } from "lucide-react";
import { toast } from "sonner@2.0.3";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const pets = [
  {
    id: 1,
    name: "Max",
    type: "Cachorro",
    breed: "Labrador",
    age: "2 anos",
    gender: "Macho",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=500",
    description: "Carinhoso e cheio de energia",
    location: "ONG Amigos dos Animais",
  },
  {
    id: 2,
    name: "Luna",
    type: "Gato",
    breed: "Siamês",
    age: "1 ano",
    gender: "Fêmea",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500",
    description: "Brincalhona e muito carinhosa",
    location: "ONG Patinhas Felizes",
  },
  {
    id: 3,
    name: "Thor",
    type: "Cachorro",
    breed: "Pastor Alemão",
    age: "3 anos",
    gender: "Macho",
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=500",
    description: "Leal e protetor",
    location: "ONG Lar dos Bichos",
  },
  {
    id: 4,
    name: "Mia",
    type: "Gato",
    breed: "Persa",
    age: "6 meses",
    gender: "Fêmea",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=500",
    description: "Calma e afetuosa",
    location: "ONG Amigos dos Animais",
  },
  {
    id: 5,
    name: "Bob",
    type: "Cachorro",
    breed: "Beagle",
    age: "4 anos",
    gender: "Macho",
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500",
    description: "Divertido e adora brincar",
    location: "ONG Patinhas Felizes",
  },
  {
    id: 6,
    name: "Nina",
    type: "Gato",
    breed: "Vira-lata",
    age: "8 meses",
    gender: "Fêmea",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500",
    description: "Independente e curiosa",
    location: "ONG Lar dos Bichos",
  },
];

export function Adoption() {
  const handleAdopt = (petName: string) => {
    toast.success(`Interesse em adotar ${petName} registrado! Entraremos em contato em breve.`);
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="mb-4">Adote um Amigo</h2>
          <p className="text-muted-foreground">
            Dê um lar cheio de amor para esses animais que esperam por você
          </p>
          <div className="mt-6 flex justify-center">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bDNjbHkwcWRjd2FhZnh5Z3Bub3hncGs5dDJ6aGczZTl6MXJzaDZwcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1d7F9xyq6j7C1ojbC5/giphy.gif"
              alt="Pets adoráveis esperando adoção"
              className="h-48 rounded-2xl object-cover shadow-lg border-4 border-primary"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {pets.map((pet) => (
                <CarouselItem key={pet.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                      <div className="aspect-square relative overflow-hidden">
                        <ImageWithFallback
                          src={pet.image}
                          alt={pet.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 right-3">
                          {pet.type}
                        </Badge>
                        <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {pet.age}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {pet.gender}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {pet.name}
                          <Heart className="h-4 w-4 text-primary" />
                        </CardTitle>
                        <p className="text-sm">{pet.breed}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {pet.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="line-clamp-1">{pet.location}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full"
                          onClick={() => handleAdopt(pet.name)}
                        >
                          <Heart className="mr-2 h-4 w-4" />
                          Quero Adotar
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
