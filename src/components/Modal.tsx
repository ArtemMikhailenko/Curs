"use client";

import { useState } from "react";
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
  /** Текст на кнопке, которая открывает форму */
  buttonText?: string;
  /** Вариант стилизации кнопки (outline, default и т.д.) */
  buttonVariant?: ButtonProps["variant"];
  /** Дополнительно можно передать другие пропсы, если нужно */
}

export function OrderSheet({
  buttonText = "Замовити",
  buttonVariant = "default",
}: OrderSheetProps) {
  const [open, setOpen] = useState(false);

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
        <form className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Ім'я
            </label>
            <Input id="name" placeholder="Ваше ім'я" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              +38 (___) ___-__-__
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+38 (___) ___-__-__"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="typeOfWork">
              Тип роботи
            </label>
            <Input
              id="typeOfWork"
              placeholder="Наприклад, Докторська дисертація під ключ"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="messenger">
              Ваш Telegram або Viber
            </label>
            <Input
              id="messenger"
              placeholder="@username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="deadline">
              Термін
            </label>
            <Input
              id="deadline"
              placeholder="Вкажіть орієнтовний термін"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="pages">
              Кількість сторінок (1–150)
            </label>
            <Input
              id="pages"
              type="number"
              defaultValue={1}
              min={1}
              max={150}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="uniqueness">
              Унікальність тексту (%)
            </label>
            <Input
              id="uniqueness"
              type="number"
              defaultValue={100}
              min={0}
              max={100}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="additionalInfo">
              Додаткова інформація (тема, особливості, зауваження)
            </label>
            <Input
              id="additionalInfo"
              placeholder="Опишіть деталі"
            />
          </div>

          <SheetFooter>
            <Button type="submit">Підтвердити</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
