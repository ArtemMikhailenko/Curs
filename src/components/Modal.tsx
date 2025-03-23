"use client";

import { useState, FormEvent } from "react";
import axios from "axios";
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

interface OrderSheetProps {
  buttonText?: string;
  buttonVariant?: ButtonProps["variant"];
}

export function OrderSheet({
  buttonText = "Замовити",
  buttonVariant = "default",
}: OrderSheetProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [typeOfWork, setTypeOfWork] = useState("");
  const [messenger, setMessenger] = useState("");
  const [deadline, setDeadline] = useState("");
  const [pages, setPages] = useState("1");
  const [uniqueness, setUniqueness] = useState("100");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Формируем объединённое поле comment
      const combinedComment = `
Messenger: ${messenger}
Deadline: ${deadline}
Pages: ${pages}
Uniqueness: ${uniqueness}%
Additional info: ${additionalInfo}
      `.trim();

      // Создаём FormData и добавляем поля
      const formData = new FormData();
      if (name.trim()) formData.append("name", name.trim());
      if (phone.trim()) formData.append("phone", phone.trim());
      if (typeOfWork.trim()) formData.append("form", typeOfWork.trim());
      if (combinedComment) formData.append("comment", combinedComment);

      // Отправка запроса через axios с FormData
      const response = await axios.post("https://tele-push.ymca.one", formData);
      const data = response.data;

      if (data.status === "error") {
        if (data.msg === "phone_incorrect") {
          alert("Ошибка: Некорректный номер телефона!");
        } else {
          alert(`Ошибка: ${data.msg || "Неизвестная ошибка"}`);
        }
      } else if (data.status === "success") {
        alert("Ваш запрос успешно отправлен!");
        setOpen(false);
        resetForm();
      } else {
        alert("Неизвестный ответ от сервера.");
      }
    } catch (error: any) {
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

        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
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

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="typeOfWork">
              Тип роботи
            </label>
            <Input
              id="typeOfWork"
              placeholder="Наприклад, Докторська дисертація під ключ"
              value={typeOfWork}
              onChange={(e) => setTypeOfWork(e.target.value)}
            />
          </div>

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
