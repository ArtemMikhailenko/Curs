import { Card, CardHeader, CardTitle } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

import "swiper/css"; // Import basic Swiper styles
import "swiper/css/navigation"; 
interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: '/univercity/1.png',
    title: 'Title 1',
    description: 'Description for item 1',
  },
  {
    icon: '/univercity/2.png',
    title: 'Title 2',
    description: 'Description for item 2',
  },
  {
    icon: '/univercity/3.png',
    title: 'Title 3',
    description: 'Description for item 3',
  },
  {
    icon: '/univercity/4.png',
    title: 'Title 4',
    description: 'Description for item 4',
  },
  {
    icon: '/univercity/5.png',
    title: 'Title 5',
    description: 'Description for item 5',
  },
  {
    icon: '/univercity/6.png',
    title: 'Title 6',
    description: 'Description for item 6',
  },
  {
    icon: '/univercity/7.png',
    title: 'Title 7',
    description: 'Description for item 7',
  },
  {
    icon: '/univercity/8.png',
    title: 'Title 8',
    description: 'Description for item 8',
  },
  {
    icon: '/univercity/9.png',
    title: 'Title 9',
    description: 'Description for item 9',
  },
  {
    icon: '/univercity/10.png',
    title: 'Title 10',
    description: 'Description for item 10',
  },
  {
    icon: '/univercity/11.png',
    title: 'Title 11',
    description: 'Description for item 11',
  },
  {
    icon: '/univercity/12.png',
    title: 'Title 12',
    description: 'Description for item 12',
  },
  {
    icon: '/univercity/13.png',
    title: 'Title 13',
    description: 'Description for item 13',
  },
  {
    icon: '/univercity/14.png',
    title: 'Title 14',
    description: 'Description for item 14',
  },
  {
    icon: '/univercity/15.png',
    title: 'Title 15',
    description: 'Description for item 15',
  },
  {
    icon: '/univercity/16.png',
    title: 'Title 16',
    description: 'Description for item 16',
  },
  {
    icon: '/univercity/17.png',
    title: 'Title 17',
    description: 'Description for item 17',
  },
  {
    icon: '/univercity/18.png',
    title: 'Title 18',
    description: 'Description for item 18',
  },
  {
    icon: '/univercity/19.png',
    title: 'Title 19',
    description: 'Description for item 19',
  },
  {
    icon: '/univercity/20.png',
    title: 'Title 20',
    description: 'Description for item 20',
  },
  {
    icon: '/univercity/21.png',
    title: 'Title 21',
    description: 'Description for item 21',
  },
  {
    icon: '/univercity/22.png',
    title: 'Title 22',
    description: 'Description for item 22',
  },
  {
    icon: '/univercity/23.png',
    title: 'Title 23',
    description: 'Description for item 23',
  },
  {
    icon: '/univercity/24.png',
    title: 'Title 24',
    description: 'Description for item 24',
  },
  {
    icon: '/univercity/25.png',
    title: 'Title 25',
    description: 'Description for item 25',
  },
  {
    icon: '/univercity/26.png',
    title: 'Title 26',
    description: 'Description for item 26',
  },
  {
    icon: '/univercity/27.png',
    title: 'Title 27',
    description: 'Description for item 27',
  },
  {
    icon: '/univercity/28.png',
    title: 'Title 28',
    description: 'Description for item 28',
  },
  {
    icon: '/univercity/29.png',
    title: 'Title 29',
    description: 'Description for item 29',
  },
  {
    icon: '/univercity/30.png',
    title: 'Title 30',
    description: 'Description for item 30',
  },
  {
    icon: '/univercity/31.png',
    title: 'Title 31',
    description: 'Description for item 31',
  },
  {
    icon: '/univercity/32.png',
    title: 'Title 32',
    description: 'Description for item 32',
  },
  {
    icon: '/univercity/33.png',
    title: 'Title 33',
    description: 'Description for item 33',
  },
  {
    icon: '/univercity/34.png',
    title: 'Title 34',
    description: 'Description for item 34',
  },
  {
    icon: '/univercity/35.png',
    title: 'Title 35',
    description: 'Description for item 35',
  },
  {
    icon: '/univercity/36.png',
    title: 'Title 36',
    description: 'Description for item 36',
  },
];




export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Допомагаємо{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          студентам
        </span>{" "}
        з цих університетів
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Тут може бути ваш опис процесу чи додаткова інформація.
      </p>
      
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {features.map(({ icon, title }: FeatureProps) => (
          <SwiperSlide key={title}>
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center">
                  <img
                    src={icon}
                    alt={title}
                    style={{ width: "170px", height: "170px", objectFit: "cover" }}
                  />
                  {/* {title} */}
                </CardTitle>
              </CardHeader>
              {/* <CardContent>{description}</CardContent> */}
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
