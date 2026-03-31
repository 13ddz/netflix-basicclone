import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Bath, Activity, Sparkles, Video, Home, Sun } from "lucide-react";
import { toast } from "sonner@2.0.3";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const services = [
  {
    id: 1,
    name: "Banho e Tosa",
    description: "Seu pet mais limpinho e mimado",
    icon: Bath,
    price: "A partir de R$ 60,00",
    details: "Banho completo, tosa higiênica, corte de unhas e limpeza de ouvidos",
  },
  {
    id: 2,
    name: "Fisioterapia",
    description: "Tratamento e cuidado profissional",
    icon: Activity,
    price: "A partir de R$ 120,00",
    details: "Sessões especializadas para reabilitação e bem-estar do seu pet",
  },
  {
    id: 3,
    name: "Acupuntura",
    description: "Alívio e relaxamento para seu pet",
    icon: Sparkles,
    price: "A partir de R$ 150,00",
    details: "Terapia alternativa para dores crônicas e estresse",
  },
  {
    id: 4,
    name: "Teleorientação",
    description: "Atendimento rápido e fácil",
    icon: Video,
    price: "A partir de R$ 80,00",
    details: "Consulta veterinária online com profissionais qualificados",
  },
  {
    id: 5,
    name: "Hospedagem",
    description: "Um cuidador hospeda seu pet pelo tempo que você precisar",
    icon: Home,
    price: "A partir de R$ 50,00/dia",
    details: "Ambiente seguro e confortável com supervisão 24h",
  },
  {
    id: 6,
    name: "Creche",
    description: "Seu pet passa o dia se divertindo na casa de um cuidador",
    icon: Sun,
    price: "A partir de R$ 40,00/dia",
    details: "Diversão, socialização e cuidados durante todo o dia",
  },
];

export function Services() {
  const handleBookService = (serviceName: string) => {
    toast.success(`Agendamento para ${serviceName} iniciado! Em breve entraremos em contato.`);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="mb-4">Serviços PetLar</h2>
          <p className="text-muted-foreground">
            Cuidado completo e profissional para o bem-estar do seu pet
          </p>
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
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="hover:shadow-lg transition-all hover:border-primary/50 h-full flex flex-col">
                        <CardHeader className="flex-1">
                          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                            <Icon className="h-7 w-7 text-primary" />
                          </div>
                          <CardTitle className="text-center">{service.name}</CardTitle>
                          <CardDescription className="text-center">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground text-center min-h-[48px]">
                            {service.details}
                          </p>
                          <div className="text-primary text-center">
                            {service.price}
                          </div>
                          <Button
                            className="w-full"
                            onClick={() => handleBookService(service.name)}
                          >
                            Agendar Serviço
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
