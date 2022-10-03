import React from "react";

interface IAccordionContentProps {
  isActive: boolean;
}

const AccordionContent = ({ isActive }: IAccordionContentProps) => {
  return (
    <div className={`accordion__body ${isActive ? "is-active" : ""}`}>
      Chocolate sweet roll wafer oat cake sesame snaps sweet roll sweet roll
      macaroon. Gummi bears soufflé icing marzipan wafer candy. Jelly-o pie
      sweet gummi bears ice cream cheesecake. Gummies brownie gummi bears cookie
      powder. Cheesecake liquorice bear claw sweet roll gummi bears chocolate
      bar lemon drops. Fruitcake apple pie macaroon jelly-o fruitcake icing
      sweet apple pie wafer. Tart liquorice macaroon halvah jelly-o. Pie jelly
      sesame snaps jelly-o bear claw halvah. Jelly shortbread cookie halvah
      brownie shortbread chupa chups. Cotton candy donut cotton candy brownie
      shortbread caramels pie caramels biscuit. Marzipan candy liquorice jelly-o
      jelly-o. Candy canes pastry chocolate cake candy dessert halvah cookie
      donut. Halvah lemon drops lemon drops icing marzipan macaroon pudding
      liquorice. Chocolate cake cookie carrot cake lollipop dessert chocolate
      cake candy sugar plum.
    </div>
  );
};

export default AccordionContent;
