import React from "react";
import "../src/styles/style.scss";

import Header from "./components/header/header";
import AccordionList from "./components/accordion-list/accordion-list";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="wrapper">
      <div className="main main--teritary">
        <section className="section-accordion">
          <div className="shell shell--size-4">
            <Header />
            <div className="section__body">
              <div className="accordion-form js-accordion-multiple js-accordion-bar">
                <AccordionList />
                <Footer />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
