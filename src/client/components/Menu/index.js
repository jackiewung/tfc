import React from 'react';
import { Route, Link } from 'react-router-dom';

import './Menu.scss';

const menu = {
  appetizers: [
    'Truffle Butter Edamame',
    'Crispy Fried Chicken Skin',
    'Battered Potato Chips',
  ],
  dinners: [
    {
      type: 'Dinner for 2',
      description:
        '6 pcs. of chicken, two regular sides, chicken rice, and house pickled ginger cabbage',
    },
    {
      type: 'Dinner for 3',
      description:
        '9 pcs. of chicken, three regular sides, chicken rice, and house pickled ginger cabbage',
    },
    {
      type: 'Dinner for 4',
      description:
        '12 pcs. of chicken, four regular sides, chicken rice, and house pickled ginger cabbage',
    },
  ],
  sides: [
    'Coleslaw',
    'Cabbage salad with house dressing',
    'Cold tofu with house dressing',
    'Creamy potato salad',
    'BBQ baked beans with chicken',
    'Curry creamed corn',
    'Soy glazed yams',
    'Dashi braised collard greens with bacon',
  ],
  upgradedSides: [
    'Shishito peppers with den miso and arare',
    'Creamy mashed potatoes',
    'Fried brussels sprouts with goat cheese and karashi mustard',
  ],
  extras: [
    { type: 'Chicken rice', price: 'Small 3.75 / Large 7.50' },
    { type: 'Pickled ginger cabbage', price: '1.6' },
    { type: 'Yuzu pepper sauce', price: '1 tbsp. 1.50' },
  ],
  chickenByThePiece: [
    { type: 'Wing', price: '2.30' },
    { type: 'Drum', price: '2.83' },
    { type: 'Thigh', price: '4.16' },
    { type: 'Breast', price: '7' },
  ],
};

const Menu = () => (
  <div className="Menu">
    <div className="Menu__border">
      <h2 className="Menu__header">Tokyo Fried Chicken Co. Menu</h2>
      <h1 className="Menu__subSection">Whet Your Appetite / 4 each</h1>
      {menu.appetizers.map(appetizer => (
        <p key={appetizer}>{appetizer}</p>
      ))}
      <h1 className="Menu__subSection">
        Chicken Dinner Sets / 14.75 per person
      </h1>
      <p>All sets are mixed - drums, wings, thighs</p>
      <p>One breast can be substituted for a drum and thigh upon request</p>
      <p>
        Please enjoy our chicken with our complimentary housemade sweet and
        spicy ponzu sauces
      </p>
      <p>Yuzu pepper sauce available upon request at an additional charge</p>
      <br />
      <br />
      {menu.dinners.map(dinner => (
        <div key={dinner.type}>
          <p className="Menu__dinnerHeader">
            <strong>{dinner.type}</strong>
          </p>
          <p>{dinner.description}</p>
        </div>
      ))}
      <h1 className="Menu__subSection">Sides</h1>
      <h1>Included in dinner set, a la carte 3.50</h1>
      {menu.sides.map(side => (
        <p key={side}>{side}</p>
      ))}
      <h1 className="Menu__subSection">Upgraded Sides</h1>
      <h1>Dinner set upgrade 1.60, a la carte 5.10</h1>
      {menu.upgradedSides.map(side => (
        <p key={side}>{side}</p>
      ))}
      <br />
      <h1>Dinner set upgrade 3, a la carte 6.50</h1>
      <p>Mac and cheese</p>
      <h1 className="Menu__subSection">Extras</h1>
      <table>
        <tbody>
          {menu.extras.map(extra => (
            <tr key={extra.type}>
              <th>{extra.type}</th>
              <th>{extra.price}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="Menu__subSection">Chicken By the Piece</h1>
      <table>
        <tbody>
          {menu.chickenByThePiece.map(piece => (
            <tr key={piece.type}>
              <th>{piece.type}</th>
              <th>{piece.price}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="Menu__subSection">Take Home Our Sauces</h1>
      <table>
        <tbody>
          <tr>
            <th>Sweet Ponzu</th>
            <th>6.75</th>
          </tr>
          <tr>
            <th>Sweet Spicy Ponzu</th>
            <th>6.75</th>
          </tr>
        </tbody>
      </table>
      <h1 className="Menu__subSection">Merchandise</h1>
      <h1>T-shirts</h1>
      <table>
        <tbody>
          <tr>
            <th>"TFC Logo Type" (black or gray)</th>
            <th>20</th>
          </tr>
          <tr>
            <th>"TFC Original" (navy blue)</th>
            <th>25</th>
          </tr>
        </tbody>
      </table>
      <h1 style={{ paddingTop: '10px' }}>Hoodies</h1>
      <table>
        <tbody>
          <tr>
            <th>"TFC Original" (navy blue)</th>
            <th>45</th>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <br />
    <div>*Prices subject to change without notice</div>
  </div>
);

export default Menu;
