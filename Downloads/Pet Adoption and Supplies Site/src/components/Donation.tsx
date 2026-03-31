import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner@2.0.3";
import { Package, Heart, Gift, Star } from "lucide-react";
import { Badge } from "./ui/badge";

export function Donation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    itemType: "",
    quantity: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Doação registrada com sucesso! Você receberá um cupom de desconto por e-mail.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      itemType: "",
      quantity: "",
      description: "",
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="mb-4">Faça uma Doação</h2>
          <p className="text-muted-foreground">
            Ajude as ONGs parceiras doando rações, brinquedos e outros itens para os animais
          </p>
        </div>

        {/* Cards Informativos */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Itens Necessários
              </CardTitle>
              <CardDescription>O que você pode doar</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Rações secas e úmidas</li>
                <li>• Brinquedos novos ou usados</li>
                <li>• Cobertores e camas</li>
                <li>• Medicamentos e vacinas</li>
                <li>• Coleiras e guias</li>
                <li>• Produtos de higiene</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Como Funciona
              </CardTitle>
              <CardDescription>Processo de doação</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>1. Preencha o formulário abaixo</li>
                <li>2. Aguarde nosso contato</li>
                <li>3. Agendamos a coleta</li>
                <li>4. Sua doação vai direto para as ONGs</li>
                <li>5. Receba seu cupom de desconto!</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-accent/10">
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2 mx-auto">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="flex items-center gap-2 justify-center">
                Seus Benefícios
              </CardTitle>
              <CardDescription>Descontos para doadores</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-center">
                <li className="flex flex-col items-center gap-1">
                  <Badge variant="default" className="text-base px-4 py-1">10% OFF</Badge>
                  <span className="text-muted-foreground">até R$ 100</span>
                </li>
                <li className="flex flex-col items-center gap-1">
                  <Badge variant="default" className="text-base px-4 py-1">15% OFF</Badge>
                  <span className="text-muted-foreground">R$ 101 - R$ 300</span>
                </li>
                <li className="flex flex-col items-center gap-1">
                  <Badge variant="default" className="text-base px-4 py-1">20% OFF</Badge>
                  <span className="text-muted-foreground">acima de R$ 300</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4 pt-3 border-t text-center">
                * Válido na próxima compra
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Formulário de Doação</CardTitle>
            <CardDescription>
              Preencha os dados abaixo para doar itens para os animais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="itemType">Tipo de Item *</Label>
                  <Select
                    value={formData.itemType}
                    onValueChange={(value) => setFormData({ ...formData, itemType: value })}
                  >
                    <SelectTrigger id="itemType">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="racao">Ração</SelectItem>
                      <SelectItem value="brinquedo">Brinquedo</SelectItem>
                      <SelectItem value="cobertor">Cobertor/Cama</SelectItem>
                      <SelectItem value="medicamento">Medicamento</SelectItem>
                      <SelectItem value="acessorio">Acessório</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="quantity">Quantidade</Label>
                  <Input
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="Ex: 2 pacotes de 10kg, 5 unidades..."
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description">Descrição dos Itens</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Descreva os itens que deseja doar..."
                    rows={4}
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Enviar Doação
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
