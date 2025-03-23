import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import icon1 from '@/assets/icon-1.svg'
import icon2 from '@/assets/icon-2.svg'
import icon3 from '@/assets/icon-3.svg'

interface FeatureProps {
  icon: any;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: icon1,
    title: "ніякого плагіату",
    description:''  },
  {
    icon: icon2,
    title: "конфіденційність",
    description:""
  },
  {
    icon: icon3,
    title: "повний супровід",
    description:
      "",
  },
];

export const Order = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Замовляй
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Зробимо все, щоб ви успішно отримали ступінь
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-3 place-items-center">
                <img
                    src={icon}
                    alt={title}
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};