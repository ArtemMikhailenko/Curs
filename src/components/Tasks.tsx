import React from "react";
import "@/components/css/hero.css";

interface Task {
  title: string;
  done: number;
}

const tasks: Task[] = [
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
  { title: "Переклад тексту", done: 70 },
  { title: "Креслення", done: 270 },
  { title: "Презентація", done: 195 },
  { title: "Бізнес план", done: 82 },
  { title: "Доповідь", done: 324 },
  { title: "Лабораторна робота", done: 461 },
  { title: "Онлайн допомога", done: 164 },
  { title: "Копірайтинг", done: 273 },
  { title: "Рерайт", done: 222 },
  { title: "Тези", done: 360 },
  { title: "Готові роботи", done: 231 },
  { title: "Дисертація", done: 68 },
  { title: "Аналіз статей", done: 190 },
  { title: "Розрахункова робота", done: 355 },
  { title: "Маркетингове дослідження", done: 291 },
];

// Дублируем для бесшовного эффекта
const duplicated = [...tasks, ...tasks, ...tasks];

export const TwoDirectionalMarquee: React.FC = () => {
  return (
    <section className="marquee-section container py-10" id="services">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Що ми для вас зробимо?
      </h2>
      
      <div className="marquee-wrapper">
        {/* Перший ряд (рухається вправо) */}
        <div className="marquee marquee-right">
          <div className="marquee-track">
            {duplicated.map((task, idx) => (
              <div className="marquee-item" key={`right-${idx}`}>
                <h3 className="title-text">{task.title}</h3>
                <p className="done-text">Виконано: {task.done}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Другий ряд (рухається вліво) */}
        <div className="marquee marquee-left">
          <div className="marquee-track">
            {duplicated.map((task, idx) => (
              <div className="marquee-item" key={`left-${idx}`}>
                <h3 className="title-text">{task.title}</h3>
                <p className="done-text">Виконано: {task.done}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
