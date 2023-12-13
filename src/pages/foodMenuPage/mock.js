import { v4 as uuid } from 'uuid';

export const appetizers = [
  {
    id: uuid(),
    name: 'HUMMUS WITH EDAMAME & MUSHROOMS',
    description: [
      {
        name: 'chickpea tahini dup, edamame,',
      },
      {
        name: 'mushrooms, fresh herbs',
      },
    ],
    price: '14',
  },
  {
    id: uuid(),
    name: 'RED PEPPER WALLNUT DIP',
    description: [
      {
        name: 'Grilled red peppers, garlic,',
      },
      {
        name: 'wallnuts, fresh herbs',
      },
    ],
    price: '15',
  },
  {
    id: uuid(),
    name: 'EGGPLANT CAVIAR WITH TAHINI',
    description: [
      {
        name: 'Roasted eggplant dip, toasted breadcrumbs,',
      },
      {
        name: 'zucchini, pomegranate, tahini dressing, basil',
      },
    ],
    price: '14',
  },
  {
    id: uuid(),
    name: 'YELLOW CAVIAR WITH PARMEGIANO WAFFLES',
    description: [
      {
        name: 'Creamcheese, fresh herbs, pike caviar,',
      },
      {
        name: 'parmegiano and gouda waffles',
      },
    ],
    price: '27',
  },
  {
    id: uuid(),
    name: 'VITELLO TONNATO WITH ROASTBEEF',
    description: [
      {
        name: 'House made brisket, fried capers, tonnato sauce',
      },
    ],
    price: '15',
  },
  {
    id: uuid(),
    name: 'CRISPY EGGPLANTS IN SWEET & SOUR SAUCE',
    description: [
      {
        name: 'deep fried breaded eggplants, cherry tomato,',
      },
      {
        name: 'sweet and sour sauce, cashews',
      },
    ],
    price: '19',
  },
  {
    id: uuid(),
    name: 'CURED MEAT PLATTER',
    // description: 'deep fried breaded eggplants, cherry tomato, sweet and sour sauce, cashews',
    price: '46',
  },
  {
    id: uuid(),
    name: 'AGED CHEESE BOARD',
    // description: '',
    price: '44',
  },
  {
    id: uuid(),
    name: 'FRESHLY BAKED FLATBREAD',
    // description: '',
    price: '7',
  },
];

export const saladsSoup = [
  {
    id: uuid(),
    name: 'MOZZARELA AVOCADO',
    description: [
      {
        name: 'fresh mozzarela, tomatoes, avocado,',
      },
      {
        name: 'lettuce, pine nuts, basil pesto',
      },
    ],
    price: '22',
  },
  {
    id: uuid(),
    name: 'ROASTBEEF',
    description: [
      {
        name: 'Roastbeef, lettuce, tomatoes, romesco sauce',
      },
    ],
    price: '20',
  },
  {
    id: uuid(),
    name: 'BURRATA',
    description: [
      {
        name: 'Tomato chutney, fresh herbs',
      },
    ],
    price: '22',
  },
  {
    id: uuid(),
    name: 'QUINOA AVOCADO',
    description: [
      {
        name: 'Smoked eel, unagi sauce, tobiko',
      },
    ],
    price: '21',
  },
  {
    id: uuid(),
    name: 'SEAFOOD SALAD',
    description: [
      {
        name: 'Scallops, shrimp, Parmesan sauce,',
      },
      {
        name: 'mustard sauce, tomatoes Concasse',
      },
    ],
    price: '28',
  },
  {
    id: uuid(),
    name: 'Herlum tomato salad',
    description: [
      {
        name: 'Feta cheese, dressing with sesame oil,',
      },
      {
        name: 'soy, truffle',
      },
    ],
    price: '21',
  },
  {
    id: uuid(),
    name: 'Seafood Bisque',
    description: [
      {
        name: 'Lobster, shrimp, scallops, clams, сream',
      },
    ],
    price: '28',
  },
  {
    id: uuid(),
    name: 'Tom yum SOUP',
    description: [
      {
        name: 'Lobster tail, red caviar, tom yum foam,',
      },
      {
        name: 'egg noodles',
      },
    ],
    price: '27',
  },
];

export const rawBar = [
  {
    id: uuid(),
    name: 'BEEF TATAKI',
    description: [
      {
        name: 'House ponzu, apple, celery, ginger',
      },
    ],
    price: '16',
  },
  {
    id: uuid(),
    name: 'TUNA MILANESE',
    description: [
      {
        name: 'Breaded tuna slices, fresh herbs,',
      },
      {
        name: ' tahini sauce',
      },
    ],
    price: '18',
  },
  {
    id: uuid(),
    name: 'SALMON TARTARE',
    description: [
      {
        name: 'Spinach, tamarind sauce, avocado cream,',
      },
      {
        name: 'capers, yolk cream',
      },
    ],
    price: '17',
  },
  {
    id: uuid(),
    name: 'TUNA TARTARE',
    description: [
      {
        name: 'Avocado, masahosu sauce, yolk cream,',
      },
      {
        name: 'capers, masago sauce, seed crackers',
      },
    ],
    price: '17',
  },
  {
    id: uuid(),
    name: 'BEEF TARTARE',
    description: [
      {
        name: 'Truffle mayo, capers, onions.',
      },
      {
        name: 'Served with chips',
      },
    ],
    price: '16',
  },
  {
    id: uuid(),
    name: 'SALMON CEVICHE',
    description: [
      {
        name: 'Tigre milk, red onion, olive oil,',
      },
      {
        name: 'chilli, mango, passion fruit',
      },
    ],
    price: '16',
  },
  {
    id: uuid(),
    name: 'SALMON TATAKI',
    description: [
      {
        name: 'House ponzu, orange, onions, coriander',
      },
    ],
    price: '19',
  },
  {
    id: uuid(),
    name: 'YELLOWTAIL',
    description: [
      {
        name: 'Avocado, sesame sauce',
      },
    ],
    price: '19',
  },
  {
    id: uuid(),
    name: 'TRIO TARTARE OVER ICE',
    description: [
      {
        name: 'Tuna, Salmon & Hamachi',
      },
    ],
    price: '45',
  },
  {
    id: uuid(),
    name: 'SEABASS CEVICHE',
    description: [
      {
        name: 'Truffle mayo, capers, onions.',
      },
      {
        name: 'Served with chips',
      },
    ],
    price: '18',
  },
];

export const specialties = [
  {
    id: uuid(),
    name: 'GRILLED CHICKEN BREAST',
    description: [
      {
        name: 'Broccolini, asparagus, potatoes,',
      },
      {
        name: 'chicken juice',
      },
    ],
    price: '28',
  },
  {
    id: uuid(),
    name: 'GRILLED LAMB CHOPS',
    description: [
      {
        name: 'Mini zucchini,eggplant puree, sous waf',
      },
    ],
    price: '49',
  },
  {
    id: uuid(),
    name: 'SLOW COOKED BEEF SHORTRIBS',
    description: [
      {
        name: 'Potato mousse, roasted marinated red peppers',
      },
    ],
    price: '47',
  },
  {
    id: uuid(),
    name: 'ATLANTIC SALMON FILLET',
    description: [
      {
        name: 'Asparagus, dill sauce',
      },
    ],
    price: '38',
  },
  {
    id: uuid(),
    name: 'SLOW COOKED BEEF CHEEKS',
    description: [
      {
        name: 'Parmegiano Gnochi, herbs, demiglace',
      },
    ],
    price: '37',
  },
  {
    id: uuid(),
    name: 'CHILLEAN SEABASS FILLET',
    description: [
      {
        name: 'Spinach, baby zucchini, asian style sauce',
      },
    ],
    price: '53',
  },
  {
    id: uuid(),
    name: 'MORROCOAN OCTOPUS',
    description: [
      {
        name: 'Confit potato, red pepper mousse',
      },
    ],
    price: '31',
  },
  {
    id: uuid(),
    name: 'GRILLED TIGER PRAWNS',
    description: [
      {
        name: 'Burnt butter sauce, green salad,',
      },
      {
        name: 'lemon and toast',
      },
    ],
    price: '34',
  },
  {
    id: uuid(),
    name: 'GRILLED BEEF FILLET',
    description: [
      {
        name: 'baby carrot, farm vegetables seasonal,',
      },
      {
        name: 'sunchok puree, truffle-infused creamy sauce',
      },
    ],
    price: '44',
  },
];

export const steaksFromCharcoalOven = [
  {
    id: uuid(),
    name: 'PRIME ANGUS TOMEHAWK, 40 OZ',
    // description: 'chickpea tahini dup, edamame, mushrooms, fresh herbs',
    price: '142',
  },
  {
    id: uuid(),
    name: 'PRIME ANGUS RIBEYE FILLET, 14 OZ',
    // description: 'Grilled red peppers, garlic, wallnuts, fresh herbs',
    price: '62',
  },
  {
    id: uuid(),
    name: 'PRIME NEW YORK STEAK 12 OZ',
    // description:
    //   'Roasted eggplant dip, toasted breadcrumbs, zucchini, pomegranate, tahini dressing, basil',
    price: '45',
  },
];

export const sides = [
  {
    id: uuid(),
    name: 'MASHED POTATOES',
    // description: '',
    price: '11',
  },
  {
    id: uuid(),
    name: 'ASPARAGUS',
    // description: '',
    price: '13',
  },
  {
    id: uuid(),
    name: 'GRILLED VEGETABLES',
    // description: '',
    price: '10',
  },
  {
    id: uuid(),
    name: 'ROASTED BABY VEGETABLES',
    // description: '',
    price: '12',
  },
  {
    id: uuid(),
    name: 'TRUFFLE ORZO',
    // description: '',
    price: '19',
  },
  {
    id: uuid(),
    name: 'ROASTED POTATOES',
    // description: '',
    price: '10',
  },
  {
    id: uuid(),
    name: 'LOBSTER ORZO',
    // description: '',
    price: '28',
  },
];

export const sauces = [
  {
    id: uuid(),
    name: 'PEPPERCORN',
    // description: '',
    price: '6',
  },
  {
    id: uuid(),
    name: 'MUSHROOM',
    // description: '',
    price: '6',
  },
  {
    id: uuid(),
    name: 'BLUE CHEESE',
    // description: '',
    price: '6',
  },
  {
    id: uuid(),
    name: 'BBQ',
    // description: '',
    price: '6',
  },
];

export const dessert = [
  {
    id: uuid(),
    name: 'CHOUX WITH BERRIES AND VANILLA ICE CREAM',
    // description: '',
    price: '14',
  },
  {
    id: uuid(),
    name: 'BROWNIE WITH GELATO',
    // description: '',
    price: '15',
  },
  {
    id: uuid(),
    name: 'CATALAN CHEESECAKE WITH BERRIES',
    // description: '',
    price: '16',
  },
  {
    id: uuid(),
    name: 'MEDOVIK WITH GELATO',
    // description: '',
    price: '14',
  },
  {
    id: uuid(),
    name: 'DONUTS WITH VANILLA',
    // description: '',
    price: '14',
  },
  {
    id: uuid(),
    name: 'MILLEFEUILLE',
    // description: '',
    price: '15',
  },
  {
    id: uuid(),
    name: 'MONTBLANC',
    // description: '',
    price: '15',
  },
];

export const foodMenu = [
  {
    id: uuid(),
    title: 'APPETIZERS',
    type: appetizers,
  },
  {
    id: uuid(),
    title: 'SALADS & SOUP',
    type: saladsSoup,
  },
  {
    id: uuid(),
    title: 'RAW BAR',
    type: rawBar,
  },
  {
    id: uuid(),
    title: 'SPECIALTIES',
    description: 'Roasted in charcoal oven',
    type: specialties,
  },
  {
    id: uuid(),
    title: 'STEAKS FROM CHARCOAL OVEN',
    type: steaksFromCharcoalOven,
  },
  {
    id: uuid(),
    title: 'SIDES',
    type: sides,
  },
  {
    id: uuid(),
    title: 'SAUCES',
    type: sauces,
  },
  {
    id: uuid(),
    title: 'DESSERT',
    type: dessert,
  },
];
