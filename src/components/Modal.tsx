"use client";

import { useState, FormEvent } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Описание: Компонент OrderSheet — это «шторка» (Sheet) с формой заказа,
 * которая при сабмите отправляет POST-запрос на API:
 *    https://tele-push.ymca.one
 *
 * Поля формы мапятся на поля, которые принимает API:
 *    - name => name
 *    - phone => phone (обязательно, если no_phone не установлен на сервере)
 *    - typeOfWork => form (пример)
 *    - Остальные данные (messenger, deadline, pages, uniqueness, additionalInfo)
 *      помещаем в comment, чтобы сервер мог получить всю информацию.
 *
 * API в случае успеха возвращает:
 *    { "status": "success" }
 * В случае ошибки (например, phone_incorrect):
 *    { "status": "error", "msg": "phone_incorrect" }
 */

interface OrderSheetProps {
  /** Текст на кнопке, которая открывает форму */
  buttonText?: string;
  /** Вариант стилизации кнопки (outline, default и т.д.) */
  buttonVariant?: ButtonProps["variant"];
}

export function OrderSheet({
  buttonText = "Замовити",
  buttonVariant = "default",
}: OrderSheetProps) {
  const [open, setOpen] = useState(false);

  // Локальные стейты для полей формы
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [typeOfWork, setTypeOfWork] = useState("");
  const [messenger, setMessenger] = useState("");
  const [deadline, setDeadline] = useState("");
  const [pages, setPages] = useState("1");
  const [uniqueness, setUniqueness] = useState("100");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [loading, setLoading] = useState(false);

  // Обработчик сабмита
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Сформируем поле comment, объединив остальные поля
      const combinedComment = `
Messenger: ${messenger}
Deadline: ${deadline}
Pages: ${pages}
Uniqueness: ${uniqueness}%
Additional info: ${additionalInfo}
      `.trim();

      // Тело POST-запроса
      const body = {
        name: name.trim() || undefined, // если пусто, не отправляем
        phone: phone.trim() || undefined,
        form: typeOfWork.trim() || undefined,
        comment: combinedComment || undefined,
      };

      // Выполняем запрос
      const response = await fetch("https://tele-push.ymca.one", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (data.status === "error") {
        // Обработка ошибки
        if (data.msg === "phone_incorrect") {
          alert("Ошибка: Некорректный номер телефона!");
        } else {
          alert(`Ошибка: ${data.msg || "Неизвестная ошибка"}`);
        }
      } else if (data.status === "success") {
        // Успешно
        alert("Ваш запрос успешно отправлен!");
        // Закроем форму и сбросим поля
        setOpen(false);
        resetForm();
      } else {
        alert("Неизвестный ответ от сервера.");
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      alert("Произошла ошибка при отправке. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setTypeOfWork("");
    setMessenger("");
    setDeadline("");
    setPages("1");
    setUniqueness("100");
    setAdditionalInfo("");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Кнопка, открывающая панель */}
      <SheetTrigger asChild>
        <Button variant={buttonVariant}>{buttonText}</Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[90%] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Оформлення замовлення</SheetTitle>
          <SheetDescription>
            Заповніть поля нижче, щоб ми могли обробити ваше замовлення.
          </SheetDescription>
        </SheetHeader>

        {/* Форма */}
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          {/* Имя */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Ім&apos;я
            </label>
            <Input
              id="name"
              placeholder="Ваше ім'я"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Телефон */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              +38 (___) ___-__-__
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+38 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Тип работы */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="typeOfWork"
            >
              Тип роботи
            </label>
            <Input
              id="typeOfWork"
              placeholder="Наприклад, Докторська дисертація під ключ"
              value={typeOfWork}
              onChange={(e) => setTypeOfWork(e.target.value)}
            />
          </div>

          {/* Messenger */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="messenger">
              Ваш Telegram або Viber
            </label>
            <Input
              id="messenger"
              placeholder="@username"
              value={messenger}
              onChange={(e) => setMessenger(e.target.value)}
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="deadline">
              Термін
            </label>
            <Input
              id="deadline"
              placeholder="Вкажіть орієнтовний термін"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          {/* Pages */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="pages">
              Кількість сторінок (1–150)
            </label>
            <Input
              id="pages"
              type="number"
              min={1}
              max={150}
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
          </div>

          {/* Uniqueness */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="uniqueness"
            >
              Унікальність тексту (%)
            </label>
            <Input
              id="uniqueness"
              type="number"
              min={0}
              max={100}
              value={uniqueness}
              onChange={(e) => setUniqueness(e.target.value)}
            />
          </div>

          {/* Additional info */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="additionalInfo"
            >
              Додаткова інформація (тема, особливості, зауваження)
            </label>
            <Input
              id="additionalInfo"
              placeholder="Опишіть деталі"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </div>

          <SheetFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Відправлення..." : "Підтвердити"}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
