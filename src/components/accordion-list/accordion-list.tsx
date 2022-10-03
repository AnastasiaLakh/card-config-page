import React from "react";

import AccordionItem from "./accordion-item/accordion-item";
import SubmitButton from "./submit-button/submit-button";

const accordionData = [
  {
    id: 1,
    name: "Standort",
  },
  {
    id: 2,
    name: "Vertragsoptionen",
  },
  {
    id: 3,
    name: "Infrastruktur",
  },
  {
    id: 4,
    name: "Einrichtung und Betrieb",
  },
];

const AccordionList = () => {
  // form ??
  return (
    <div>
      {accordionData.map(({ id, name }) => {
        return <AccordionItem key={id} name={name} />;
      })}
      <SubmitButton />
    </div>
  );
};

export default AccordionList;
