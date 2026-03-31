import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart, Dog, Cat, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useCart } from "../contexts/CartContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
  description: string;
  petType: "dog" | "cat";
  inStock: boolean;
}

const products: Product[] = [
  // Produtos para Cachorros
  {
    id: "dog-food-1",
    name: "Ração Premium para Cães Adultos",
    category: "Rações",
    subcategory: "Ração Seca",
    price: 189.90,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500",
    description: "Nutrição completa e balanceada - 15kg",
    petType: "dog",
    inStock: true,
  },
  {
    id: "dog-food-2",
    name: "Ração para Filhotes",
    category: "Rações",
    subcategory: "Ração Seca",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500",
    description: "Rico em DHA para desenvolvimento - 10kg",
    petType: "dog",
    inStock: true,
  },
  {
    id: "dog-snack-1",
    name: "Petiscos Naturais para Cães",
    category: "Rações",
    subcategory: "Petiscos",
    price: 34.90,
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=500",
    description: "Snacks saudáveis sem conservantes - 500g",
    petType: "dog",
    inStock: true,
  },
  {
    id: "dog-hygiene-1",
    name: "Shampoo para Cães",
    category: "Higiene e Limpeza",
    subcategory: "Banho",
    price: 42.90,
    image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500",
    description: "Fórmula suave e hidratante - 500ml",
    petType: "dog",
    inStock: true,
  },
  {
    id: "dog-health-1",
    name: "Suplemento Vitamínico",
    category: "Medicina e Saúde",
    subcategory: "Suplementos",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500",
    description: "Fortalece imunidade - 60 cápsulas",
    petType: "dog",
    inStock: true,
  },
  {
    id: "dog-bowl-1",
    name: "Comedouro Duplo Inox",
    category: "Acessórios de Alimentação",
    subcategory: "Comedouros",
    price: 54.90,
    image: "https://images.unsplash.com/photo-1591768575621-5c2a8b0d5a86?w=500",
    description: "Tigelas para comida e água",
    petType: "dog",
    inStock: true,
  },

  // Produtos para Gatos
  {
    id: "cat-food-1",
    name: "Ração Premium para Gatos Adultos",
    category: "Rações",
    subcategory: "Ração Seca",
    price: 149.90,
    image: "https://images.unsplash.com/photo-1589662291167-abf103c558c2?w=500",
    description: "Nutrição completa e balanceada - 10kg",
    petType: "cat",
    inStock: true,
  },
  {
    id: "cat-food-2",
    name: "Ração Úmida Sachê",
    category: "Rações",
    subcategory: "Ração Úmida",
    price: 2.90,
    image: "https://images.unsplash.com/photo-1589662291167-abf103c558c2?w=500",
    description: "Sabor frango - 85g",
    petType: "cat",
    inStock: true,
  },
  {
    id: "cat-litter-1",
    name: "Areia Higiênica Perfumada",
    category: "Caixa de Areia e Limpeza",
    subcategory: "Areia",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=500",
    description: "Alto poder de absorção - 4kg",
    petType: "cat",
    inStock: true,
  },
  {
    id: "cat-litter-2",
    name: "Caixa de Areia com Tampa",
    category: "Caixa de Areia e Limpeza",
    subcategory: "Caixa",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?w=500",
    description: "Sistema com filtro anti-odor",
    petType: "cat",
    inStock: true,
  },
  {
    id: "cat-health-1",
    name: "Pasta para Bola de Pelo",
    category: "Medicina e Saúde",
    subcategory: "Suplementos",
    price: 45.90,
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=500",
    description: "Auxilia na eliminação - 70g",
    petType: "cat",
    inStock: true,
  },
  {
    id: "cat-bowl-1",
    name: "Bebedouro Fonte Automático",
    category: "Acessórios de Alimentação",
    subcategory: "Bebedouros",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",
    description: "Água sempre fresca e circulante - 2L",
    petType: "cat",
    inStock: true,
  },
];

export function Products() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPetType, setSelectedPetType] = useState<"dog" | "cat" | "all">("all");

  const categories = {
    dog: [
      "all",
      "Rações",
      "Higiene e Limpeza",
      "Medicina e Saúde",
      "Acessórios de Alimentação",
    ],
    cat: [
      "all",
      "Rações",
      "Caixa de Areia e Limpeza",
      "Medicina e Saúde",
      "Acessórios de Alimentação",
    ],
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const filteredProducts = products.filter((product) => {
    const matchesPetType = selectedPetType === "all" || product.petType === selectedPetType;
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesPetType && matchesCategory;
  });

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="mb-4">Nossos Produtos</h2>
          <p className="text-muted-foreground">
            Produtos de qualidade para seu melhor amigo
          </p>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={(value) => {
            setSelectedPetType(value as "dog" | "cat" | "all");
            setSelectedCategory("all");
          }}
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="dog" className="gap-2">
              <Dog className="h-4 w-4" />
              Cães
            </TabsTrigger>
            <TabsTrigger value="cat" className="gap-2">
              <Cat className="h-4 w-4" />
              Gatos
            </TabsTrigger>
          </TabsList>

          {/* Filtros de Categoria */}
          {selectedPetType !== "all" && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
              >
                Todas Categorias
              </Button>
              {categories[selectedPetType].slice(1).map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          )}

          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {filteredProducts.map((product) => (
                  <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                        <div className="aspect-square relative overflow-hidden">
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-3 right-3 text-xs">
                            {product.category}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="absolute top-3 left-3 text-xs"
                          >
                            {product.petType === "dog" ? "🐕" : "🐱"}
                          </Badge>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {product.description}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl text-primary">
                            R$ {product.price.toFixed(2)}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className="w-full"
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Adicionar
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
        </Tabs>
      </div>
    </section>
  );
}
