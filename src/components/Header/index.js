import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header(props) {
    const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Edward Plecha
        </a>
      </h2>
      <nav>
          <ul className="flex-row">
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {(category.name)}
              </span>
            </li>
          ))}
          </ul>
      </nav>
    </header>
  );
}

export default Header;