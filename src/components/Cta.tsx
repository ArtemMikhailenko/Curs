import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            Всі ваші{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              дипломні роботи та курсові проекти
            </span>{" "}
            в одному місці
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Ми пропонуємо комплексне рішення для розробки дипломних робіт, курсових проектів та інших академічних завдань. З нами ви отримаєте професійний підхід, індивідуальний супровід і гарантію високоякісного результату.
          </p>
        </div>
        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Замовити консультацію</Button>
          <Button variant="outline" className="w-full md:w-auto">
            Дізнатися більше
          </Button>
        </div>
      </div>
    </section>
  );
};
