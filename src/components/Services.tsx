import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/genetic.svg";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Консультації та супровід",
    description:
      "Надаємо професійні консультації з підготовки дипломних, курсових та інших навчальних робіт. Допомагаємо структурувати дослідження та оформити результат згідно вимог.",
    icon: <ChartIcon />,
  },
  {
    title: "Проектне управління",
    description:
      "Організуємо весь процес роботи над проектами: від планування до здачі фінального варіанту, гарантуючи високий рівень якості та своєчасне виконання.",
    icon: <WalletIcon />,
  },
  {
    title: "Автоматизація завдань",
    description:
      "Розробляємо кастомні рішення для автоматизації рутинних процесів, що дозволяють економити час і зосередитись на головних аспектах дослідження.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Професійні
            </span>{" "}
            Послуги
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Надаємо комплексне супроводження студентських проектів – від консультацій до впровадження автоматизованих рішень.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Про наші послуги"
        />
      </div>
    </section>
  );
};
