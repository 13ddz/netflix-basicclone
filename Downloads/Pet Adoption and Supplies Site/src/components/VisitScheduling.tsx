import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Badge } from "./ui/badge";
import { toast } from "sonner@2.0.3";
import { Calendar as CalendarIcon, MapPin, Users, Clock } from "lucide-react";
import { format } from "date-fns@4.1.0";
import { ptBR } from "date-fns@4.1.0/locale";

const ongs = [
  {
    id: "1",
    name: "ONG Amigos dos Animais",
    address: "Rua das Flores, 123 - Centro",
    maxVisitors: 10,
    currentVisitors: 7,
    hours: "Seg-Sex: 9h-17h | Sáb: 9h-13h",
  },
  {
    id: "2",
    name: "ONG Patinhas Felizes",
    address: "Av. Principal, 456 - Vila Nova",
    maxVisitors: 8,
    currentVisitors: 3,
    hours: "Ter-Dom: 10h-16h",
  },
  {
    id: "3",
    name: "ONG Lar dos Bichos",
    address: "Rua Verde, 789 - Jardim Europa",
    maxVisitors: 15,
    currentVisitors: 12,
    hours: "Seg-Sáb: 8h-18h",
  },
];

export function VisitScheduling() {
  const [selectedOng, setSelectedOng] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitors: "1",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOng || !date) {
      toast.error("Por favor, selecione uma ONG e uma data.");
      return;
    }
    
    const ong = ongs.find((o) => o.id === selectedOng);
    const remainingSpots = ong ? ong.maxVisitors - ong.currentVisitors : 0;
    
    if (parseInt(formData.visitors) > remainingSpots) {
      toast.error(`Disponibilidade limitada! Apenas ${remainingSpots} vagas restantes.`);
      return;
    }

    toast.success("Visita agendada com sucesso! Você receberá uma confirmação por e-mail.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      visitors: "1",
      time: "",
    });
    setDate(undefined);
    setSelectedOng("");
  };

  const selectedOngData = ongs.find((o) => o.id === selectedOng);
  const remainingSpots = selectedOngData 
    ? selectedOngData.maxVisitors - selectedOngData.currentVisitors 
    : 0;

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="mb-4">Agende uma Visita</h2>
          <p className="text-muted-foreground">
            Visite nossas ONGs parceiras e conheça os animais disponíveis para adoção
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {ongs.map((ong) => {
            const remainingSpots = ong.maxVisitors - ong.currentVisitors;
            const availability = (remainingSpots / ong.maxVisitors) * 100;

            return (
              <Card
                key={ong.id}
                className={`cursor-pointer transition-all ${
                  selectedOng === ong.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedOng(ong.id)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{ong.name}</CardTitle>
                  <CardDescription className="flex items-start gap-1">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    {ong.address}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{ong.hours}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        Disponibilidade
                      </span>
                      <Badge
                        variant={availability > 50 ? "default" : availability > 20 ? "secondary" : "destructive"}
                      >
                        {remainingSpots}/{ong.maxVisitors} vagas
                      </Badge>
                    </div>
                    
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          availability > 50
                            ? "bg-green-500"
                            : availability > 20
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${availability}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Dados para Agendamento</CardTitle>
            <CardDescription>
              Preencha seus dados para agendar a visita
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label>ONG Selecionada *</Label>
                  <Select value={selectedOng} onValueChange={setSelectedOng} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma ONG" />
                    </SelectTrigger>
                    <SelectContent>
                      {ongs.map((ong) => (
                        <SelectItem key={ong.id} value={ong.id}>
                          {ong.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedOngData && (
                    <p className="text-sm text-muted-foreground">
                      {selectedOngData.address}
                    </p>
                  )}
                </div>

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
                  <Label htmlFor="visitors">Número de Visitantes *</Label>
                  <Select
                    value={formData.visitors}
                    onValueChange={(value) => setFormData({ ...formData, visitors: value })}
                  >
                    <SelectTrigger id="visitors">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "pessoa" : "pessoas"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Data da Visita *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: ptBR }) : "Selecione uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Horário Preferido *</Label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => setFormData({ ...formData, time: value })}
                  >
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Selecione o horário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {selectedOngData && (
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm">
                    <strong>Atenção:</strong> Restam apenas{" "}
                    <strong>{selectedOngData.maxVisitors - selectedOngData.currentVisitors}</strong>{" "}
                    vagas disponíveis para visitas nesta ONG.
                  </p>
                </div>
              )}

              <Button type="submit" size="lg" className="w-full">
                Confirmar Agendamento
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
