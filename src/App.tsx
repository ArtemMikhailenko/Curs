import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import "./App.css";
import ReviewsBlock from "./components/ReviewsBlock/ReviewsBlock";
import { TwoDirectionalMarquee } from "./components/Tasks";

function App() {
  return (
    <>
      
      <Hero />
      <TwoDirectionalMarquee/>
      <Sponsors />
      <About />
      <HowItWorks />
      <Services />
      <Cta />
      <ReviewsBlock/>
      <FAQ />
     
      <ScrollToTop />
    </>
  );
}

export default App;
