import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Тип для відображення одного пункту
interface FeatureProps {
  number: string;       // Наприклад, "01", "02", "03", "04"
  title: string;        // Заголовок
  description: string;  // Короткий опис
}

// Імітуємо дані з прикладу
const features: FeatureProps[] = [
  {
    number: "01",
    title: "Справляємося з усіма спеціальностями",
    description: "Для нас немає нічого неможливого.",
  },
  {
    number: "02",
    title: "Даємо серйозні гарантії",
    description: "Дорожимо майбутніми клієнтами й власною репутацією.",
  },
  {
    number: "03",
    title: "Повний супровід до захисту",
    description: "Робимо прозору і зрозумілу роботу. Контроль процесу з вашого боку.",
  },
  {
    number: "04",
    title: "Розуміємо своїх клієнтів з півслова",
    description: "Завжди домовляємося, знаходимо компроміс.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Нас обирають{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          не просто так
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ number, title, description }) => (
          <Card key={number} className="bg-muted/50 h-full">
            <CardHeader className="flex flex-col items-center justify-center gap-2">
              {/* Цифра, стилізована під “іконку” */}
              <span className="text-green-500 text-5xl font-extrabold">
                {number}
              </span>
              <CardTitle className="mt-2 text-lg font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-muted-foreground">
                {description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
