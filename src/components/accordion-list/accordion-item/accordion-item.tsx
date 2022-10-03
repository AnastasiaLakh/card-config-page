import React, { useState } from "react";

import AccordionHeader from "./accordion-header/accordion-header";
import AccordionContent from "./accordion-content/accordion-content";

interface IAccordionItemProps {
  name: string;
}

const AccordionItem = ({ name }: IAccordionItemProps) => {
  const [isActive, setIsActive] = useState(false);
  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`accordion__section ${isActive ? "is-active" : ""}`}>
      <AccordionHeader name={name} handleClick={toggleAccordion} />
      <AccordionContent isActive={isActive} />
    </div>
  );
};

export default AccordionItem;
