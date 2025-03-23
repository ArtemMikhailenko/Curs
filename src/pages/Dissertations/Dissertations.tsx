import { About } from "@/components/Dissertations/About";
import { WhyChooseUs } from "@/components/Dissertations/ChooseUs";
import { Hero } from "@/components/Dissertations/Hero";
import { Order } from "@/components/Dissertations/Order";
import { Services } from "@/components/Dissertations/Services";
import { Pricing } from "@/components/Pricing";

// src/pages/Dissertations.tsx
export default function Dissertations() {
  return (
    <section className="container py-10">
      <Hero/>
      <About/>
      <Order/>
      <Pricing/>
      <Services/>
      <WhyChooseUs/>
    </section>
  );
}
