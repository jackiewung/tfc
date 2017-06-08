import React from 'react';
import { Route, Link } from 'react-router-dom';

import './Menu.scss';

const menu = {
  appetizers: [
    'Truffle Butter Edamame',
    'Crispy Fried Chicken Skin',
    'Battered Potato Chips'
  ],
  dinners: [
    {
      type: 'Dinner for 2',
      description: '6 pcs. of chicken, two regular sides, chicken rice, and house pickled ginger cabbage'
    },
    {
      type: 'Dinner for 3',
      description: '9 pcs. of chicken, three regular sides, chicken rice, and house pickled ginger cabbage'
    },
    {
      type: 'Dinner for 4',
      description: '12 pcs. of chicken, four regular sides, chicken rice, and house pickled ginger cabbage'
    }
  ],
  sides: [
    'Coleslaw',
    'Cabbage salad with house dressing',
    'Cold tofu with house dressing',
    'Creamy potato salad',
    'Soy glazed yams',
    'Dashi braised collard greens with bacon',
    'Curry creamed corn',
    'BBQ baked beans with chicken'
  ],
  upgradedSides: [
    'Shishito peppers with den miso and arare',
    'Fried brussels  sprouts with goat cheese and karashi mustard',
    'Miso ratatouille'
  ],
  extras: [
    { type: 'Chicken rice', price: 'Small 3.5 / Large 6.25' },
    { type: 'Pickled ginger cabbage', price: '1.50' },
    { type: 'Yuzu pepper Sauce', price: '1 oz. 1.50'}
  ],
  chickenByThePiece: [
    { type: 'Wing', price: '2.15' },
    { type: 'Drum', price: '2.65' },
    { type: 'Thigh', price: '3.90' },
    { type: 'Breast', price: '6.55' }
  ]
}

const Menu = () =>
  <div className="Menu">
    <div className="Menu__border">
      <h2 className="Menu__header">Tokyo Fried Chicken Co. Menu</h2>

      <h1 className="Menu__subSection">Whet Your Appetite / 4 each</h1>
      { menu.appetizers.map(appetizer => ( <p key={appetizer}>{appetizer}</p>)) }

      <h1 className="Menu__subSection">Chicken Dinner Sets / 13.75 per person</h1>
      <p>All sets are mixed dark meat - drums, wings, thighs</p>
      <p>A chicken breast can be substituted for a drum and thigh upon request</p>
      <p>Please enjoy our chicken with our complimentary housemade sweet and spicy ponzu sauces</p>
      <p>Yuzu pepper sauce available upon request at an additional charge</p>
      <br /><br />

      { menu.dinners.map(dinner => (
          <div key={dinner.type}>
            <p className="Menu__dinnerHeader"><strong>{dinner.type}</strong></p>
            <p>{dinner.description}</p>
          </div>
        ))
      }

      <h1 className="Menu__subSection">
      Sides<br />One side per person included with dinner set or 3.25 each a la carte</h1>
      { menu.sides.map(side => (<p key={side}>{side}</p>)) }

      <h1 className="Menu__subSection">Upgraded Sides<br />2.2 each as an upgraded side or 4.75 each a la carte</h1>
      { menu.upgradedSides.map(side => (<p key={side}>{side}</p>)) }
      <br />
      <p>Mac and cheese 3.3 each as an upgraded side or 6 each a la carte</p>

      <h1 className="Menu__subSection">Extras</h1>
      <table>
        <tbody>
          {
            menu.extras.map(extra => (
              <tr key={extra.type}>
                <th>{extra.type}</th>
                <th>{extra.price}</th>
              </tr>
            ))
          }
        </tbody>
      </table>
      
      <h1 className="Menu__subSection">Chicken By the Piece</h1>
      <table>
        <tbody>
          {
            menu.chickenByThePiece.map(piece => (
              <tr key={piece.type}>
                <th>{piece.type}</th>
                <th>{piece.price}</th>
              </tr>
            ))
          }
        </tbody>
      </table>

      <h1 className="Menu__subSection">Take Home Our Sauce Bottles</h1>
      <table>
        <tbody>
          <tr>
            <th>Sweet Ponzu</th>
            <th>6.50</th>
          </tr>
          <tr>
            <th>Sweet Spicy Ponzu</th>
            <th>6.75</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>;

export default Menu;
