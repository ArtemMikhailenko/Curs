import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check } from "lucide-react";
import { OrderSheet } from "./Modal";

// Тип для відображення інформації про дисертацію
interface DissertationProps {
  title: string;               // Наприклад, "Кандидатська дисертація 'під ключ'"
  discountLabel: string;       // "Вигода до 25%"
  priceFrom: number;           // "від 1700$"
  separateWorks: { 
    label: string;            // "Робота від 1400$" / "Стаття під вимоги ВАК від 80$" тощо
  }[];
  buttonText: string;          // Наприклад, "Замовити"
}

// Приклад масиву з даними для 2 типів дисертацій
const dissertationList: DissertationProps[] = [
  {
    title: "Кандидатська дисертація “під ключ”",
    discountLabel: "Вигода до 25%",
    priceFrom: 1700, 
    separateWorks: [
      { label: "Робота від 1400 $" },
      { label: "Стаття під вимоги ВАК від 80 $" },
      { label: "Автореферат від 300 $" },
    ],
    buttonText: "Замовити",
  },
  {
    title: "Докторська дисертація “під ключ”",
    discountLabel: "Вигода до 35%",
    priceFrom: 4500, 
    separateWorks: [
      { label: "Робота від 3000 $" },
      { label: "Стаття під вимоги ВАК від 120 $" },
      { label: "Автореферат від 600 $" },
      { label: "Монографія від 1000 $" },
    ],
    buttonText: "Замовити",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Готові виконати для вас роботу 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}“під ключ”{" "}
        </span>
        або окремі частини
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {dissertationList.map((item) => (
          <Card 
            key={item.title}
            className="relative"
          >
            <CardHeader className="space-y-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold">
                  {item.title}
                </CardTitle>
                <Badge variant="secondary" className="text-sm text-primary">
                  {item.discountLabel}
                </Badge>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">
                  від {item.priceFrom}$
                </span>
                <span className="text-sm text-muted-foreground"> 
                  (прикладна ціна)
                </span>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              <OrderSheet />
              <hr className="border border-dashed" />
              <p className="text-lg font-semibold text-center mb-2">
                Якщо замовляти окремо:
              </p>
              <div className="space-y-2">
                {item.separateWorks.map((sw, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Check className="text-green-500" size={20} />
                    <span>{sw.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter />
          </Card>
        ))}
      </div>
    </section>
  );
};
