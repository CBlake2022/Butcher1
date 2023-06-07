import { useState } from "react";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import "./App.scss";
import Brands from "./components/brands/Brands";
import Process from "./components/process/Process";
import Company from "./components/company/Company";
import Testimonials from "./components/testimonials/Testimonials";
import Product from "./components/product/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Hero />
      <Brands />
      <Process />
      <Company />
      <Testimonials />
      <Product />
    </>
  );
}

export default App;
