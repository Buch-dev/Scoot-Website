// This is a server component

import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <Services />
    </div>
  );
}
