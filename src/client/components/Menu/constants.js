export const foodMenu = {
  appetizers: {
    price: 4,
    items: [
    'Truffle Butter Edamame',
    'Crispy Fried Chicken Skin',
    'Battered Potato Chips',
    ]
  },
  dinners: {
    price: 14.75,
    items: [
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
    ]
  },
  sides: {
    price: 3.50,
    items: [
      'Coleslaw',
      'Cabbage salad with house dressing',
      'Cold tofu with house dressing',
      'Creamy potato salad',
      'BBQ baked beans with chicken',
      'Curry creamed corn',
      'Soy glazed yams',
      'Dashi braised collard greens with bacon',
    ],
  },
  upgradedSides: {
    upgradePrice: '1.60',
    price: '5.10',
    items: [
      'Shishito peppers with den miso and arare',
      'Creamy mashed potatoes',
      'Fried brussels sprouts with goat cheese and karashi mustard',
    ],
  },
  upgradedSidesDeluxe: {
    upgradePrice: 3,
    price: '6.50',
    items: [
      'Mac and cheese',
    ],
  },
  extras: [
    { type: 'Chicken rice', price: 'Small 3.75 / Large 7.50' },
    { type: 'Pickled ginger cabbage', price: '1.60' },
    { type: 'Yuzu pepper sauce', price: '1 tbsp. 1.50' },
  ],
  chickenByThePiece: [
    { type: 'Wing', price: '2.30' },
    { type: 'Drum', price: '2.83' },
    { type: 'Thigh', price: '4.16' },
    { type: 'Breast', price: '7' },
  ],
};

export const drinksMenu = [
  {
    type: 'California Craft',
    drinks: [
      {
        title: 'Old World Hefeweizen',
        description: 'Bootlegger’s Brewery, Fullerton, ABV: 5% 12 fl. oz',
        price: '5.5'
      },
      {
        title: 'Fruitlands Sour',
        description: 'Modern Times Beer, San Diego ABV: 4.8 % 16 fl. oz',
        price: '7'
      },
      {
        title: 'Sparkale Sparkling Rose Ale',
        description: '21st Amendment Brewery, San Francisco ABV: 5.5% 12 fl. oz',
        price: '5.5'
      },
      {
        title: 'Angel City IPA',
        description: 'Angel City Brewery, Los Angeles ABV: 6.1% 12 fl. oz',
        price: '5'
      },
      {
        title: 'Windy Hill IPA',
        description: 'Mikkeller Brewery, San Diego ABV: 7% 16 fl. oz',
        price: '7'
      }
    ]
  },
  {
    type: 'Japanese Craft',
    drinks: [
      {
        title: 'Mugishokunin',
        description: 'Orion Brewery, Okinawa ABV: 5.5% 11.8 fl. oz.',
        price: '5.5'
      },
      {
        title: 'Echigo Koshihikari Rice Lager',
        description: 'Echigo Brewery, Niigata ABV: 5.0% 11.83 fl. oz.',
        price: '7'
      },
      {
        title: 'Lucky Cat White Ale',
        description: 'Kizakura Brewery, Kyoto ABV: 5.0% 12 fl oz.',
        price: '10'
      },
      {
        title: 'Lucky Chicken Red IPA',
        description: 'Kizakura Brewery, Kyoto ABV: 5.5% 12 fl oz.',
        price: '10'
      },
      {
        title: 'Echigo Red Ale',
        description: 'Echigo Brewery, Niigata ABV: 6.0% 11.15 fl. oz.',
        price: '10.5'
      },
      {
        title: 'Echigo Stout',
        description: 'Echigo Brewery, Niigata ABV: 7.0% 11.15 fl. oz.',
        price: '10.5'
      }
    ]
  },
  {
    type: 'Japanese Traditional',
    drinks: [
      {
        title: 'Asahi',
        description: '21.4 fl. oz.',
        price: '6.75'
      },
      {
        title: 'Sapporo',
        description: '20.3 fl. oz.',
        price: '6.75'
      },
    ]
  },
  {
    type: 'Sake',
    drinks: [
      {
        title: 'Kiku-Masamune Cup',
        description: 'light, extra dry SMV: +10.5',
        price: [
          '7.5 / 180ml',
          '--'
        ]
      },
      {
        title: 'Kurosawa, Nigori',
        description: 'light, fruity, clean SMV: -50',
        price: [
          '18 / 300ml',
          '--'
        ]
      },
      {
        title: 'Amabuki Himawari “Sunflower”, Junmai Ginjo',
        description: 'light, dry SMV: +10',
        price: [
          '--',
          '58 / 720ml'
        ]
      },
      {
        title: 'Otokoyama, Tokubetsu Junmai',
        description: 'clean, extremely dry SMV: +14',
        price: [
          '25 / 300ml',
          '60 / 720ml'
        ]
      },
      {
        title: 'Kubota, Junmai Daiginjo',
        description: 'fruity, clean-crisp finish SMV: +0',
        price: [
          '27 / 300ml',
          '63 / 720ml'
        ]
      },
    ]
  },
  {
    type: 'Shochu',
    drinks: [
      {
        title: 'Yokaichi',
        price: [
          '--',
          '35 / bottle'
        ]
      },
    ]
  },
  {
    type: 'Beverages',
    drinks: [
      {
        title: 'Yuzu Lemonade',
        price: '3.75'
      },
      {
        title: 'Sweet Iced Green Tea',
        price: '2.75'
      },
      {
        title: 'Iced Oolong Tea',
        price: '2.75'
      },
      {
        title: 'Melon Creamy Soda',
        price: '5'
      },
      {
        title: `Cock 'n Bull Ginger Beer`,
        price: '4'
      },
      {
        title: `Dad's Old Fashioned Root Beer`,
        price: '3'
      },
      {
        title: `Mexican Coke Bottle`,
        price: '3'
      },
      {
        title: `Diet Coke can`,
        price: '1.5'
      },
      {
        title: `Sprite can`,
        price: '1.5'
      },
    ]
  },
]
