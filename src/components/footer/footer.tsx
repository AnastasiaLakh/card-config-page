import React, { useState } from "react";

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleFooter = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`accordion__bar ${isActive ? "is-active" : ""}`}
      onClick={toggleFooter}
    >
      <div className="shell shell--size-4">
        <div className="accordion__bar-inner">
          <h4>Kosten&uuml;bersicht</h4>
          <div
            className={`price-alt price-alt--xl ${isActive ? "is-active" : ""}`}
          >
            <div className="price__row">
              <p>
                Gesamtsumme: <br />
                exklusive Mehrwertsteuer
              </p>

              <h3 className="hidden-xs">
                1.208,00 <span>&euro;</span>
              </h3>

              <h3 className="hidden-lg hidden-md hidden-sm">
                96,80 <span>&euro;</span>
              </h3>
            </div>
          </div>
          <p className="accordion__bar-hint hidden-lg hidden-md hidden-sm">
            exklusive 19% Mehrwertsteuer
          </p>
          <div className="list-prices">
            <ul>
              <li className="hidden-xs">
                <h6>Einmalige Kosten:</h6>

                <p>
                  500,00 <span>&euro;</span>
                </p>
              </li>

              <li className="hidden-xs">
                <h6>Monatliche Kosten:</h6>

                <p>
                  293,00 <span>&euro;</span>
                </p>
              </li>

              <li className="hidden-lg hidden-md hidden-sm">
                <h6>Einmalige Kosten:</h6>

                <p>
                  39,00 <span>&euro;</span>
                </p>
              </li>

              <li className="hidden-lg hidden-md hidden-sm">
                <h6>Monatliche Kosten:</h6>

                <p>
                  57,80 <span>&euro;</span>
                </p>
              </li>
            </ul>

            <span>exklusive 19% Mehrwertsteuer</span>
          </div>
        </div>

        <div className="accordion__bar-actions">
          <button className="btn accordion__btn accordion__btn--small">
            Hinzuf&uuml;gen
          </button>

          <a href="#" className="accordion__link">
            <span>Abbrechen</span>

            <i className="ico-angle-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7.408"
                height="10.81"
                viewBox="0 0 7.408 10.81"
              >
                <path
                  id="Chervon"
                  d="M0,0,5,4.172,0,8"
                  transform="translate(1.408 1.408)"
                  fill="none"
                  stroke="#248700"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </svg>
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
