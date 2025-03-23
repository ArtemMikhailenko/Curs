import logo from "@/assets/Logo.png";
import { Send, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white">
      {/* Горизонтальная линия, при желании можно убрать или перекрасить */}
      <hr className="w-11/12 mx-auto border-gray-700" />

      {/* Сетка с двумя колонками: слева (лого + текст) и справа (контакты) */}
      <section className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Левая колонка */}
        <div className="flex flex-col gap-4">
          {/* Лого и текст в одной строке (можно сделать в одной колонке, 
              но обычно в строке смотрится аккуратнее) */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="InteLED.AI logo"
              className="w-16 h-auto object-contain"
            />
            <h3 className="text-xl font-bold">InteLED.AI</h3>
          </div>

          {/* Дисклеймер под лого */}
          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            Компанія InteLED.AI не продає жодних документів! 
            Надаємо послуги виключно з пошуку та структурування інформації 
            в якості прикладу.
          </p>
        </div>

        {/* Правая колонка: контакты */}
        <div className="flex flex-col items-start md:items-end gap-2">
          <h3 className="font-bold text-lg">Залишились питання?</h3>
          <div className="flex items-center gap-2">
            <Send className="w-5 h-5 text-green-400" />
            <a
              href="https://t.me/inteled_ai"
              className="opacity-80 hover:opacity-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              @inteled_ai
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-green-400" />
            <a
              href="tel:+380689958077"
              className="opacity-80 hover:opacity-100 transition-colors"
            >
              +38 (068) 995 80 77
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};
