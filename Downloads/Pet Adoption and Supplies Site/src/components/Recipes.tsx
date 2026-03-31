import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dog, Cat, Clock, Users } from "lucide-react";
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

const recipes = [
  {
    id: 1,
    name: "Biscoito de Banana e Aveia para Cães",
    petType: "dog",
    prepTime: "30 min",
    servings: "20 unidades",
    image: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=500",
    ingredients: [
      "2 bananas maduras",
      "1 xícara de aveia em flocos",
      "2 colheres de sopa de pasta de amendoim (sem açúcar)",
      "1 ovo",
    ],
    instructions: [
      "Amasse as bananas em uma tigela",
      "Adicione o ovo e a pasta de amendoim, misture bem",
      "Acrescente a aveia aos poucos até formar uma massa",
      "Faça bolinhas e achate formando cookies",
      "Asse a 180°C por 15-20 minutos",
    ],
    nutrition: {
      calories: "45 kcal por unidade",
      protein: "2g",
      fiber: "1.5g",
      fat: "1g",
    },
    benefits: "Rico em fibras, potássio e proteínas. Ótimo para digestão.",
    warning: "Evite se seu cão tiver alergia a amendoim.",
  },
  {
    id: 2,
    name: "Patê de Frango para Gatos",
    petType: "cat",
    prepTime: "20 min",
    servings: "4 porções",
    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=500",
    ingredients: [
      "200g de peito de frango sem pele",
      "1/4 de cenoura cozida",
      "1 colher de chá de azeite",
      "2 colheres de sopa de caldo de frango sem sal",
    ],
    instructions: [
      "Cozinhe o frango sem temperos",
      "Triture o frango cozido com a cenoura",
      "Adicione o azeite e o caldo",
      "Bata até formar uma pasta homogênea",
      "Sirva em temperatura ambiente",
    ],
    nutrition: {
      calories: "80 kcal por porção",
      protein: "12g",
      fiber: "0.5g",
      fat: "2.5g",
    },
    benefits: "Alta proteína, baixo carboidrato. Perfeito para gatos.",
    warning: "Conservar na geladeira por até 3 dias.",
  },
  {
    id: 3,
    name: "Picolé de Frutas para Cães",
    petType: "dog",
    prepTime: "10 min + congelamento",
    servings: "6 picolés",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500",
    ingredients: [
      "1 xícara de melancia sem sementes",
      "1/2 xícara de morangos",
      "1/2 xícara de água de coco natural",
      "1 colher de chá de mel (opcional)",
    ],
    instructions: [
      "Bata todas as frutas com a água de coco",
      "Adicione o mel se desejar",
      "Despeje em forminhas de gelo ou picolé",
      "Congele por 4 horas",
      "Sirva como petisco refrescante",
    ],
    nutrition: {
      calories: "25 kcal por picolé",
      protein: "0.5g",
      fiber: "0.8g",
      fat: "0.2g",
    },
    benefits: "Hidratante e refrescante. Ideal para dias quentes.",
    warning: "Servir com moderação. Não substitui a alimentação principal.",
  },
  {
    id: 4,
    name: "Bolinho de Atum para Gatos",
    petType: "cat",
    prepTime: "25 min",
    servings: "12 bolinhos",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500",
    ingredients: [
      "1 lata de atum em água (sem sal)",
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de chá de erva-gateira seca (opcional)",
    ],
    instructions: [
      "Escorra bem o atum",
      "Misture todos os ingredientes",
      "Faça bolinhas pequenas",
      "Asse a 180°C por 12-15 minutos",
      "Deixe esfriar completamente antes de servir",
    ],
    nutrition: {
      calories: "35 kcal por bolinho",
      protein: "5g",
      fiber: "0.3g",
      fat: "1.2g",
    },
    benefits: "Rico em ômega-3 e proteínas. Fortalece o pelo.",
    warning: "Oferecer como petisco, máximo 2-3 por dia.",
  },
];

export function Recipes() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="mb-4">Receitas Saudáveis</h2>
          <p className="text-muted-foreground">
            Receitas caseiras nutritivas e seguras para seu pet
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
              {recipes.map((recipe) => (
                <CarouselItem key={recipe.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                          <div className="aspect-video relative overflow-hidden">
                            <ImageWithFallback
                              src={recipe.image}
                              alt={recipe.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <Badge
                              className="absolute top-3 right-3"
                              variant={recipe.petType === "dog" ? "default" : "secondary"}
                            >
                              {recipe.petType === "dog" ? (
                                <><Dog className="h-3 w-3 mr-1" /> Cachorro</>
                              ) : (
                                <><Cat className="h-3 w-3 mr-1" /> Gato</>
                              )}
                            </Badge>
                          </div>
                          <CardHeader>
                            <CardTitle className="text-lg line-clamp-2">{recipe.name}</CardTitle>
                            <CardDescription className="flex gap-4 mt-2">
                              <span className="flex items-center gap-1 text-xs">
                                <Clock className="h-3 w-3" />
                                {recipe.prepTime}
                              </span>
                              <span className="flex items-center gap-1 text-xs">
                                <Users className="h-3 w-3" />
                                {recipe.servings}
                              </span>
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button variant="outline" className="w-full">
                              Ver Receita Completa
                            </Button>
                          </CardContent>
                        </Card>
                      </DialogTrigger>

                      <DialogContent className="max-w-2xl max-h-[90vh]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            {recipe.petType === "dog" ? (
                              <Dog className="h-5 w-5 text-primary" />
                            ) : (
                              <Cat className="h-5 w-5 text-primary" />
                            )}
                            {recipe.name}
                          </DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="max-h-[70vh] pr-4">
                          <div className="space-y-6">
                            <img
                              src={recipe.image}
                              alt={recipe.name}
                              className="w-full h-48 object-cover rounded-lg"
                            />

                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {recipe.prepTime}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {recipe.servings}
                              </span>
                            </div>

                            <div>
                              <h4 className="mb-3">Ingredientes:</h4>
                              <ul className="list-disc list-inside space-y-2">
                                {recipe.ingredients.map((ingredient, index) => (
                                  <li key={index} className="text-sm text-muted-foreground">
                                    {ingredient}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="mb-3">Modo de Preparo:</h4>
                              <ol className="list-decimal list-inside space-y-2">
                                {recipe.instructions.map((instruction, index) => (
                                  <li key={index} className="text-sm text-muted-foreground">
                                    {instruction}
                                  </li>
                                ))}
                              </ol>
                            </div>

                            <div className="bg-secondary/30 p-4 rounded-lg">
                              <h4 className="mb-3">Informações Nutricionais:</h4>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Calorias:</span>
                                  <p>{recipe.nutrition.calories}</p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Proteína:</span>
                                  <p>{recipe.nutrition.protein}</p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Fibra:</span>
                                  <p>{recipe.nutrition.fiber}</p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Gordura:</span>
                                  <p>{recipe.nutrition.fat}</p>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                                <p className="text-sm">
                                  <span className="text-green-700 dark:text-green-400">✓ Benefícios:</span>{" "}
                                  {recipe.benefits}
                                </p>
                              </div>
                              <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg">
                                <p className="text-sm">
                                  <span className="text-amber-700 dark:text-amber-400">⚠ Atenção:</span>{" "}
                                  {recipe.warning}
                                </p>
                              </div>
                            </div>
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
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
