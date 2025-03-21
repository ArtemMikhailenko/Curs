import { Statistics } from "./Statistics";
import hero from "../assets/hero.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={hero}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-around">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Наш досвід - це ваш гарант!{" "}
                </span>
                - це ваш гарант!
              </h2>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
