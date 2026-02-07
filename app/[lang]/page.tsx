import Header from "@pages/components/sections/header/Header";
import Footer from "@pages/components/sections/footer/Footer";
import Projects from "./_components/Projects/Projects";
import Contact from "./_components/Contact/Contact";
import About from "./_components/About/About";
import Count from "./_components/Count/Count";
import Skills from "./_components/Skills/Skills";
import { getDictionary } from "./dictionaries";

export default async function Home({ params }: {
  params: Promise<{ lang: 'en' | 'az' | 'ru' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return (
    <div>
      <Header dict={dict} />
      <div className="mt-5"></div>
      <About lang={lang} />
      <div className="mt-5"></div>
      <Count dict={dict} />
      <div className="mt-5"></div>
      <Skills dict={dict} />
      <div className="mt-20"></div>
      <Projects lang={lang} />
      <div className="mt-24"></div>
      <Contact dict={dict} />
      <div className="mt-20"></div>
      <Footer lang={lang} />
      <div className="mt-7"></div>
    </div>
  );
}

