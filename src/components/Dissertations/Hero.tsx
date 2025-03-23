
import disertation from '@/assets/dissertations.png'
import { OrderSheet } from "../Modal";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
            Допоможемо
            </span>{" "}
            з
          </h1>{" "}
          дисертацією{" "}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Швидко та професійно | За розуміними цінами | Конфіденційно
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <OrderSheet />
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10 hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
       <img className='hero-first' src={disertation} alt="" />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};