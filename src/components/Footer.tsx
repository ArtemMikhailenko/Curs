import logo from "@/assets/Logo.png";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white">
      {/* Горизонтальная линия, при желании можно убрать или перекрасить */}
      <hr className="w-11/12 mx-auto border-gray-700" />

      {/* Сетка с двумя колонками: слева (лого + текст) и справа (контакты + соц.сети) */}
      <section className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Левая колонка */}
        <div className="flex flex-col gap-4">
          {/* Лого и название */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="InteLED.AI logo"
              className="w-16 h-auto object-contain"
            />
            <h3 className="text-xl font-bold">InteLED.AI</h3>
          </div>

          {/* Дисклеймер */}
          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            Компанія InteLED.AI не продає жодних документів!
            Надаємо послуги виключно з пошуку та структурування інформації
            в якості прикладу.
          </p>
        </div>

        {/* Правая колонка: контакты и соц.сети */}
        <div className="flex flex-col items-start md:items-end gap-2">
          <h3 className="font-bold text-lg mb-2">Залишились питання?</h3>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-green-400" />
            <a
              href="mailto:kursoviks@gmail.com"
              className="opacity-80 hover:opacity-100 transition-colors"
            >
              kursoviks@gmail.com
            </a>
          </div>

          {/* Viber */}
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-green-400" />
            <span className="opacity-80">Viber: +38068-101-9-101</span>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-green-400" />
            <span className="opacity-80">WhatsApp: +38068-101-9-101</span>
          </div>

          {/* Социальные сети */}
          <h4 className="font-bold text-md mt-4">Соц. мережі:</h4>
          <div className="flex flex gap-5">
            <div className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-green-400" />
              <a
                href="https://www.instagram.com/zakaz.kursoviks/?hl=uk"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-colors"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Facebook className="w-5 h-5 text-green-400" />
              <a
                href="https://www.facebook.com/kursoviks/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-colors"
              >
                Facebook
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Twitter className="w-5 h-5 text-green-400" />
              <a
                href="https://x.com/kursoviks"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
