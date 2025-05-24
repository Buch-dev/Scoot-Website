// This is a server component

import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Products />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
