import React from "react";

interface IAccordionHeaderProps {
  name: string;
  handleClick: () => void;
}

const AccordionHeader = ({ name, handleClick }: IAccordionHeaderProps) => {
  return (
    <div className="accordion__head">
      <button onClick={handleClick}>
        <h6>{name}</h6>
        <i>i</i>
      </button>
    </div>
  );
};

export default AccordionHeader;
