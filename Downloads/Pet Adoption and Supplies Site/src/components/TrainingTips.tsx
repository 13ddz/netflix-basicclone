import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Award, 
  Target, 
  Heart, 
  Brain, 
  Users, 
  Home,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

const trainingTips = [
  {
    id: 1,
    title: "Reforço Positivo",
    difficulty: "Iniciante",
    icon: Heart,
    description: "Base do adestramento eficaz",
    tips: [
      "Recompense imediatamente comportamentos desejados",
      "Use petiscos, elogios verbais e carinho",
      "Seja consistente - sempre reforce o mesmo comportamento",
      "Nunca use punição física",
    ],
    benefits: [
      "Fortalece o vínculo com seu pet",
      "Aprendizado mais rápido e duradouro",
      "Pet mais confiante e feliz",
    ],
  },
  {
    id: 2,
    title: "Comandos Básicos",
    difficulty: "Iniciante",
    icon: Target,
    description: "Sentar, Deitar, Ficar e Vir",
    tips: [
      "Comece com 'sentar' - o comando mais fácil",
      "Use palavras curtas e tom de voz consistente",
      "Pratique 5-10 minutos, 2-3 vezes ao dia",
      "Ambiente calmo, sem distrações no início",
    ],
    benefits: [
      "Controle em situações do dia a dia",
      "Segurança em passeios",
      "Base para comandos avançados",
    ],
  },
  {
    id: 3,
    title: "Socialização",
    difficulty: "Iniciante",
    icon: Users,
    description: "Exposição a diferentes ambientes e seres",
    tips: [
      "Apresente seu pet a diferentes pessoas, animais e sons",
      "Comece cedo - ideal entre 3 e 14 semanas",
      "Experiências positivas e graduais",
      "Respeite o ritmo do seu animal",
    ],
    benefits: [
      "Pet mais confiante e equilibrado",
      "Reduz ansiedade e medo",
      "Previne agressividade",
    ],
  },
  {
    id: 4,
    title: "Controle de Latidos",
    difficulty: "Intermediário",
    icon: AlertCircle,
    description: "Ensine quando latir é apropriado",
    tips: [
      "Identifique a causa do latido (tédio, medo, alerta)",
      "Comando 'silêncio' com reforço positivo",
      "Ignore latidos por atenção",
      "Proporcione exercício físico adequado",
    ],
    benefits: [
      "Convivência harmoniosa com vizinhos",
      "Comunicação mais clara com seu pet",
      "Reduz estresse do animal",
    ],
  },
  {
    id: 5,
    title: "Treino de Caixa",
    difficulty: "Intermediário",
    icon: Home,
    description: "Ensine seu pet a ver a caixa como refúgio",
    tips: [
      "Introduza a caixa gradualmente com recompensas",
      "Nunca use como punição",
      "Coloque brinquedos e cobertores confortáveis",
      "Aumente o tempo dentro gradualmente",
    ],
    benefits: [
      "Auxilia no treinamento higiênico",
      "Espaço seguro para o pet",
      "Facilita viagens e visitas ao veterinário",
    ],
  },
  {
    id: 6,
    title: "Truques Avançados",
    difficulty: "Avançado",
    icon: Award,
    description: "Rolar, Dar a pata, Fingir de morto",
    tips: [
      "Domine comandos básicos primeiro",
      "Divida o truque em pequenos passos",
      "Use clicker training para marcar comportamentos",
      "Pratique diariamente com paciência",
    ],
    benefits: [
      "Estimulação mental",
      "Fortalece conexão e confiança",
      "Diversão para toda família",
    ],
  },
];

const difficultyColors = {
  Iniciante: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  Intermediário: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
  Avançado: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
};

export function TrainingTips() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="mb-4">Dicas de Adestramento</h2>
          <p className="text-muted-foreground">
            Guia completo para educar seu pet com técnicas eficazes e respeito
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
              {trainingTips.map((tip) => {
                const Icon = tip.icon;
                return (
                  <CarouselItem key={tip.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                            <CardHeader>
                              <div className="flex items-start justify-between mb-2">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                  <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <Badge
                                  className={
                                    difficultyColors[
                                      tip.difficulty as keyof typeof difficultyColors
                                    ]
                                  }
                                >
                                  {tip.difficulty}
                                </Badge>
                              </div>
                              <CardTitle className="line-clamp-2">{tip.title}</CardTitle>
                              <CardDescription className="line-clamp-2">{tip.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <Button variant="outline" className="w-full">
                                Ver Detalhes
                              </Button>
                            </CardContent>
                          </Card>
                        </DialogTrigger>

                        <DialogContent className="max-w-2xl max-h-[90vh]">
                          <DialogHeader>
                            <div className="flex items-center justify-between">
                              <DialogTitle className="flex items-center gap-2">
                                <Icon className="h-5 w-5 text-primary" />
                                {tip.title}
                              </DialogTitle>
                              <Badge
                                className={
                                  difficultyColors[
                                    tip.difficulty as keyof typeof difficultyColors
                                  ]
                                }
                              >
                                {tip.difficulty}
                              </Badge>
                            </div>
                          </DialogHeader>
                          <ScrollArea className="max-h-[70vh] pr-4">
                            <div className="space-y-6">
                              <p className="text-muted-foreground">{tip.description}</p>

                              <div>
                                <h4 className="mb-3 flex items-center gap-2">
                                  <Target className="h-4 w-4 text-primary" />
                                  Como Fazer:
                                </h4>
                                <ul className="space-y-2">
                                  {tip.tips.map((item, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start gap-2 text-sm text-muted-foreground"
                                    >
                                      <span className="text-primary mt-1">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="bg-secondary/30 p-4 rounded-lg">
                                <h4 className="mb-3 flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  Benefícios:
                                </h4>
                                <ul className="space-y-2">
                                  {tip.benefits.map((benefit, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start gap-2 text-sm"
                                    >
                                      <span className="text-green-600 mt-0.5">✓</span>
                                      <span>{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </ScrollArea>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Lembretes Importantes */}
        <div className="mt-16 max-w-4xl mx-auto p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="mb-4 flex items-center gap-2 justify-center">
            <AlertCircle className="h-5 w-5 text-primary" />
            Lembretes Importantes
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm">
                <strong>Paciência:</strong> Cada animal aprende no seu próprio ritmo.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm">
                <strong>Sem punição:</strong> Nunca use violência física ou verbal.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm">
                <strong>Ajuda profissional:</strong> Consulte um adestrador certificado se necessário.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm">
                <strong>Saúde primeiro:</strong> Mudanças de comportamento podem indicar problemas de saúde.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
