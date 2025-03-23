import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "../Icons";
import cubeLeg from "../../assets/cube-leg.png";
import {
    ClipboardCheck,
    ShieldCheck,
    CheckSquare,
    UserCheck,
  } from "lucide-react";
// Расширяем интерфейс, добавляя поле img для фото
interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

// Обновляем массив сервисов: новые заголовки, описания и фото
const serviceList: ServiceProps[] = [
    {
      title: "Справляємося з усіма завданнями",
      description:
        "Беремося за різні спеціальності та рівні складності. Для нас немає нічого неможливого.",
      // Иконка ClipboardCheck для «задач»
      icon: <ClipboardCheck className="text-primary w-10 h-10" />,
    },
    {
      title: "Гарантії та надійність",
      description:
        "Дорожимо майбутніми клієнтами і своєю репутацією. Даємо справжні гарантії.",
      // ShieldCheck для «надежности и гарантий»
      icon: <ShieldCheck className="text-primary w-10 h-10" />,
    },
    {
      title: "Повний супровід до фіналу",
      description:
        "Працюємо прозоро. Контроль процесу з вашого боку, поки ви не отримаєте бажаний результат.",
      // CheckSquare как символ «подтверждения/сопровождения»
      icon: <CheckSquare className="text-primary w-10 h-10" />,
    },
    {
      title: "Розуміємо своїх клієнтів з півслова.",
      description: "Завжди домовимося, знайдемо компроміс",
      // UserCheck для «понимания клиентов»
      icon: <UserCheck className="text-primary w-10 h-10" />,
    },
  ];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        {/* Левая часть: Заголовок + карточки */}
        <div>
        <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Нас обирають{" "}
            </span>
            не просто так
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Ми завжди намагаємося знайти оптимальні рішення і підлаштуватися під 
            потреби кожного клієнта.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  {/* Блок с иконкой */}
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">{icon}</div>

                  {/* Основной контент: заголовок, описание, фото */}
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                    {/* Добавляем фото для каждого сервиса */}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Правая часть: изображение */}
        <img
          src='/dissertation/disert.png'
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
