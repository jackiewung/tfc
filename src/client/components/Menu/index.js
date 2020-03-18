import React from 'react';
import { Route, Link } from 'react-router-dom';
import { foodMenu, drinksMenu } from './constants'
import './Menu.scss';

const Menu = () => {
  const foodMenuElement = (
    <div className="Menu">
      <div className="Menu__border">
        <h2 className="Menu__header">
          Tokyo Fried Chicken Co.
        </h2>
        <h2 className="Menu__header">
          Food Menu
        </h2>
        <h1 className="Menu__subSection">
          Whet Your Appetite / {foodMenu.appetizers.price} each
        </h1>
        {foodMenu.appetizers.items.map(appetizer => (
          <p key={appetizer}>{appetizer}</p>
        ))}
        <h1 className="Menu__subSection">
          Chicken Dinner Sets / {foodMenu.dinners.price} per person
        </h1>
        <p>All sets are mixed - drums, wings, thighs</p>
        <p>Drum & thigh can be substituted for a breast upon reques</p>
        <p>
          Please enjoy our chicken with our complimentary housemade sweet and
          spicy ponzu sauces
        </p>
        <p>Yuzu pepper sauce available upon request at an additional charge</p>
        <br />
        <br />
        {foodMenu.dinners.items.map(dinner => (
          <div key={dinner.type}>
            <p className="Menu__dinnerHeader">
              <strong>{dinner.type}</strong>
            </p>
            <p>{dinner.description}</p>
          </div>
        ))}
        <h1 className="Menu__subSection">Sides</h1>
        <h1>Included in dinner set, a la carte {foodMenu.sides.price}</h1>
        {foodMenu.sides.items.map(side => (
          <p key={side}>{side}</p>
        ))}
        <h1 className="Menu__subSection">Upgraded Sides</h1>
        <h1>Dinner set upgrade {foodMenu.upgradedSides.upgradePrice}, a la carte {foodMenu.upgradedSides.price}</h1>
        {foodMenu.upgradedSides.items.map(side => (
          <p key={side}>{side}</p>
        ))}
        <br />
        <h1>Dinner set upgrade {foodMenu.upgradedSidesDeluxe.upgradePrice}, a la carte {foodMenu.upgradedSidesDeluxe.price}</h1>
        <p>Mac and cheese</p>
        <h1 className="Menu__subSection">Extras</h1>
        <table>
          <tbody>
            {foodMenu.extras.map(extra => (
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
            {foodMenu.chickenByThePiece.map(piece => (
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
    </div>
  )

  const beveragesMenuElement = (
    <div className="Menu">
      <div className="Menu__border">
        <h2 className="Menu__header">
          Tokyo Fried Chicken Co.
        </h2>
        <h2 className="Menu__header">
          Beverages Menu
        </h2>
        {
          drinksMenu.map(menuItem => {
            return (
              <div>
                <h1 className="Menu__subSection">
                  {menuItem.type}
                </h1>
                <table>
                  {menuItem.drinks.map(drink => (
                    <tbody>
                      <th style={{ paddingBottom: '10px', paddingRight: '10px' }}>
                        <div style={{ fontWeight: '600' }}>{drink.title}</div>
                        {drink.description ? <div>{drink.description}</div> : null}
                      </th>
                      {
                        Array.isArray(drink.price) ?
                        drink.price.map(priceItem => <th>{priceItem}</th>)
                        : <th>{drink.price}</th>
                      }
                    </tbody>
                  ))}
                </table>
              </div>
            )
          })
        }
      </div>
    </div>
  )

  return (
    <div>
      <div>{foodMenuElement}</div>
      <br />
      <br />
      <div>{beveragesMenuElement}</div>
      <br />
      <br />
      <div>*Prices subject to change without notice</div>
    </div>
  )
}

export default Menu;
