import Header from "@pages/components/sections/header/Header";
import About from "@pages/app/(home)/_components/About/About"
import Count from "@pages/app/(home)/_components/Count/Count"
import Skills from "@pages/app/(home)/_components/Skills/Skills"
import Footer from "@pages/components/sections/footer/Footer";
import Projects from "./_components/Projects/Projects";
import Contact from "./_components/Contact/Contact";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-5"></div>
      <About />
      <div className="mt-5"></div>
      <Count />
      <div className="mt-5"></div>
      <Skills />
      <div className="mt-20"></div>
      <Projects/>
      <div className="mt-24"></div>
      <Contact />
      <div className="mt-20"></div>
      <Footer />
      <div className="mt-7"></div>
    </div>
  );
}

