import { Statistics } from "./Statistic";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-around">
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
