import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// Компонента-картка з фіксованою висотою та вирівнюванням вмісту
function MyCard({ title, done }: { title: string; done: number }) {
  return (
    <div className="bg-card text-white p-4 rounded-lg text-center h-35 flex flex-col justify-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2">Виконано: {done}</p>
    </div>
  );
}

// Усі 27 завдань
const tasks = [
  { title: "Курсова робота", done: 2161 },
  { title: "Дипломна робота", done: 540 },
  { title: "Реферат", done: 231 },
  { title: "Стаття", done: 192 },
  { title: "Есе", done: 140 },
  { title: "Контрольна робота", done: 334 },
  { title: "Звіт з практики", done: 271 },
  { title: "Домашнє завдання", done: 86 },
  { title: "Вирішення задач", done: 153 },
  { title: "Магістерська робота", done: 187 },
  { title: "Підвищення унікальності тексту", done: 112 },
  { title: "Рецензія", done: 220 },
  { title: "Переклад тексту з іншої мови", done: 70 },
  { title: "Креслення", done: 270 },
  { title: "Презентація", done: 195 },
  { title: "Бізнес план", done: 82 },
  { title: "Доповідь", done: 324 },
  { title: "Лабораторна робота", done: 461 },
  { title: "Онлайн допомога на іспиті", done: 164 },
  { title: "Копірайтинг", done: 273 },
  { title: "Рерайт", done: 222 },
  { title: "Тези", done: 360 },
  { title: "Готові роботи", done: 231 },
  { title: "Дисертація", done: 68 },
  { title: "Аналіз статей", done: 190 },
  { title: "Розрахункова робота", done: 355 },
  { title: "Маркетингове дослідження", done: 291 },
];

// Ділимо масив приблизно навпіл
const firstHalf = tasks.slice(0, Math.ceil(tasks.length / 2));
const secondHalf = tasks.slice(Math.ceil(tasks.length / 2));

export function TwoDirectionalSliders() {
  return (
    <section className="container py-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Що{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        ми
        </span>{" "}
        для вас зробимо?
      </h2>

      <div className="space-y-8">
        {/* Перший слайдер (рухається вправо) */}
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: false, // рух вправо (стандарт)
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {firstHalf.map((item, idx) => (
              <SwiperSlide key={idx}>
                <MyCard title={item.title} done={item.done} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Другий слайдер (рухається вліво) */}
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true, // рух вліво
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {secondHalf.map((item, idx) => (
              <SwiperSlide key={idx}>
                <MyCard title={item.title} done={item.done} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
