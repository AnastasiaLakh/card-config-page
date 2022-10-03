import React from "react";

const Header = () => {
  return (
    <>
      <div className="pagination-alt">
        <h4>Page</h4>

        <a href="#" className="pagination__arrow pagination__prev"></a>

        <ul>
          <li>
            <a href="#">1</a>
          </li>

          <li>
            <a href="#">2</a>
          </li>

          <li className="is-current">
            <a href="#">3</a>
          </li>

          <li>
            <a href="#">4</a>
          </li>
        </ul>

        <a href="#" className="pagination__arrow pagination__next"></a>
      </div>

      <header className="section__head">
        <h3>Angebot konfigurieren</h3>
      </header>
    </>
  );
};

export default Header;
