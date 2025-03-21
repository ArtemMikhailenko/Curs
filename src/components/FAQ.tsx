import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Які послуги надає наша компанія?",
    answer: "Наша компанія спеціалізується на наданні послуг з підготовки дипломних робіт, студентських робіт та інших академічних завдань. Ми пропонуємо високоякісну підтримку та консультації в цих сферах.",
    value: "item-1",
  },
  {
    question: "Які переваги ми пропонуємо своїм клієнтам?",
    answer:
      "Наша компанія гарантує якість та професіоналізм у кожній виконаній роботі. Ми пропонуємо індивідуальний підхід до кожного клієнта, швидку відповідь на запитання та можливість внесення змін у завдання за бажанням замовника.",
    value: "item-2",
  },
  {
    question:
      "Чому варто обрати нас?",
    answer:
      "Ми маємо значний досвід у сфері підготовки академічних робіт, а також широкий спектр професіоналів, здатних виконати завдання будь-якої складності. Крім того, ми пропонуємо конкурентоспроможні ціни та високу якість послуг.",
    value: "item-3",
  },
  {
    question: "Чи гарантуємо ми конфіденційність даних клієнтів?",
    answer: "Так, ми повністю забезпечуємо конфіденційність даних наших клієнтів. Вся інформація, яку нам надають, залишається в суворій конфіденційності та не розголошується третім особам.",
    value: "item-4",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Поширені{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        запитання
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
