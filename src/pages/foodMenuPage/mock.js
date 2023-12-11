import { v4 as uuid } from 'uuid';

export const appetizers = [
  {
    id: uuid(),
    name: 'HUMMUS WITH EDAMAME & MUSHROOMS',
    description: 'chickpea tahini dup, edamame, mushrooms, fresh herbs',
    price: '14',
  },
  {
    id: uuid(),
    name: 'RED PEPPER WALLNUT DIP',
    description: 'Grilled red peppers, garlic, wallnuts, fresh herbs',
    price: '15',
  },
  {
    id: uuid(),
    name: 'EGGPLANT CAVIAR WITH TAHINI',
    description: 'Roasted eggplant dip, toasted breadcrumbs, zucchini, pomegranate, tahini dressing, basil',
    price: '14',
  },
  {
    id: uuid(),
    name: 'YELLOW CAVIAR WITH PARMEGIANO WAFFLES',
    description: 'Creamcheese, fresh herbs, pike caviar, parmegiano and gouda waffles',
    price: '27'
  },
  {
    id: uuid(),
    name: 'VITELLO TONNATO WITH ROASTBEEF',
    description: 'Creamcheese, fresh herbs, pike caviar, parmegiano and gouda waffles',
    price: '15'
  },
  {
    id: uuid(),
    name: 'CRISPY EGGPLANTS IN SWEET & SOUR SAUCE',
    description: 'House made brisket, fried capers, tonnato sauce',
    price: '19'
  },
  {
    id: uuid(),
    name: 'CURED MEAT PLATTER',
    description: 'deep fried breaded eggplants, cherry tomato, sweet and sour sauce, cashews',
    price: '46'
  },
  {
    id: uuid(),
    name: 'AGED CHEESE BOARD',
    description: '',
    price: '44'
  },
  {
    id: uuid(),
    name: 'FRESHLY BAKED FLATBREAD',
    description: '',
    price: '7'
  },
];

export const salads = [
  {
    id: uuid(),
    name: 'MOZZARELA AVOCADO',
    description: 'fresh mozzarela, tomatoes, avocado, lettuce, pine nuts, basil pesto',
    price: '22',
  },
  {
    id: uuid(),
    name: 'ROASTBEEF',
    description: 'Roastbeef, lettuce, tomatoes, romesco sauce',
    price: '20',
  },
  {
    id: uuid(),
    name: 'BURRATA',
    description: 'Tomato chutney, fresh herbs',
    price: '22',
  },
  {
    id: uuid(),
    name: 'QUINOA AVOCADO',
    description: 'Smoked eel, unagi sauce, tobiko',
    price: '21',
  },
  {
    id: uuid(),
    name: 'SEAFOOD SALAD',
    description: 'Scallops, shrimp, Parmesan sauce, mustard sauce, tomatoes Concasse',
    price: '28',
  },
  {
    id: uuid(),
    name: 'Herlum tomato salad',
    description: 'Feta cheese, dressing with sesame oil, soy, truffle',
    price: '21',
  },
  {
    id: uuid(),
    name: 'SEAFOOD BISQUE',
    description: 'Lobster, shrimp, scallops, clams ,сream',
    price: '28',
  },
  {
    id: uuid(),
    name: 'TOM YUM SOUP',
    description: 'Lobster tail, red caviar, tom yum foam, egg noodles',
    price: '27',
  },
];

export const rawBar = [
  {
    id: uuid(),
    name: 'BEEF TATAKI',
    description: 'House ponzu, apple, celery, ginger',
    price: '16',
  },
  {
    id: uuid(),
    name: 'TUNA MILANESE',
    description: 'Breaded tuna slices, fresh herbs, tahini sauce',
    price: '18',
  },
  {
    id: uuid(),
    name: 'SALMON TARTARE',
    description: 'Spinach, tamarind sauce, avocado cream, capers, yolk cream',
    price: '17',
  },
  {
    id: uuid(),
    name: 'TUNA TARTARE',
    description: 'Avocado, masahosu sauce, yolk cream, capers, masago sauce, seed crackers',
    price: '17',
  },
  {
    id: uuid(),
    name: 'BEEF TARTARE',
    description: 'Truffle mayo, capers, onions. Served with chips',
    price: '16',
  },
  {
    id: uuid(),
    name: 'SALMON CEVICHE',
    description: 'Tigre milk, red onion , olive oil , chilli, mango , passion fruit',
    price: '16',
  },
  {
    id: uuid(),
    name: 'SALMON TATAKI',
    description: 'House ponzu, orange, onions, coriander',
    price: '19',
  },
  {
    id: uuid(),
    name: 'YELLOWTAIL',
    description: 'Avocado, sesame sauce',
    price: '19',
  },
  {
    id: uuid(),
    name: 'TRIO TARTARE OVER ICE',
    description: 'Tuna, Salmon & Hamachi',
    price: '45',
  },
  {
    id: uuid(),
    name: 'SEABASS CEVICHE',
    description: 'Truffle mayo, capers, onions. Served with chips',
    price: '18',
  },
];

export const specialties = [
  {
    id: uuid(),
    name: 'GRILLED CHICKEN BREAST',
    description: 'Broccolini, asparagus, potatoes, chicken juice',
    price: '28',
  },
  {
    id: uuid(),
    name: 'GRILLED LAMB CHOPS',
    description: 'Tandoori marinade, eggplant puree',
    price: '49',
  },
  {
    id: uuid(),
    name: 'SLOW COOKED BEEF SHORTRIBS',
    description: 'Potato mousse, roasted marinated red peppers',
    price: '47',
  },
  {
    id: uuid(),
    name: 'ATLANTIC SALMON FILLET',
    description: 'Asparagus, dill sauce',
    price: '38',
  },
  {
    id: uuid(),
    name: 'SLOW COOKED BEEF CHEEKS',
    description: 'Parmegiano Gnochi, herbs, demiglace',
    price: '37',
  },
  {
    id: uuid(),
    name: 'CHILLEAN SEABASS FILLET',
    description: 'Spinach, baby zucchini, asian style sauce',
    price: '53',
  },
  {
    id: uuid(),
    name: 'MORROCOAN OCTOPUS',
    description: 'Confit potato, red pepper mousse',
    price: '31',
  },
  {
    id: uuid(),
    name: 'GRILLED TIGER PRAWNS',
    description: 'Burnt butter sauce, green salad, lemon and toast',
    price: '34',
  },
  {
    id: uuid(),
    name: 'GRILLED BEEF FILLET',
    description: 'Spinach, baby zucchini, asian style sauce',
    price: '44',
  },
];

export const steaksFromCharcoalOven = [
  {
    id: uuid(),
    name: 'PRIME ANGUS TOMEHAWK, 40 OZ',
    description: 'chickpea tahini dup, edamame, mushrooms, fresh herbs',
    price: '142',
  },
  {
    id: uuid(),
    name: 'PRIME ANGUS RIBEYE FILLET, 14 OZ',
    description: 'Grilled red peppers, garlic, wallnuts, fresh herbs',
    price: '82',
  },
  {
    id: uuid(),
    name: 'PRIME NEW YORK STEAK 12 OZ',
    description: 'Roasted eggplant dip, toasted breadcrumbs, zucchini, pomegranate, tahini dressing, basil',
    price: '45',
  },
]

export const sides = [
  {
    id: uuid(),
    name: 'MASHED POTATOES',
    description: '',
    price: '11',
  },
  {
    id: uuid(),
    name: 'ASPARAGUS',
    description: '',
    price: '13',
  },
  {
    id: uuid(),
    name: 'GRILLED VEGETABLES',
    description: '',
    price: '10',
  },
  {
    id: uuid(),
    name: 'ROASTED BABY VEGETABLES',
    description: '',
    price: '12',
  },
  {
    id: uuid(),
    name: 'TRUFFLE ORZO',
    description: '',
    price: '19',
  },
  {
    id: uuid(),
    name: 'ROASTED POTATOES',
    description: '',
    price: '10',
  },
  {
    id: uuid(),
    name: 'LOBSTER ORZO',
    description: '',
    price: '28',
  },
]

export const sauces = [
  {
    id: uuid(),
    name: 'PEPPERCORN',
    description: '',
    price: '',
  },
  {
    id: uuid(),
    name: 'MUSHROOM',
    description: '',
    price: '',
  },
  {
    id: uuid(),
    name: 'BLUE CHEESE',
    description: '',
    price: '',
  },
  {
    id: uuid(),
    name: 'BBQ',
    description: '',
    price: '',
  },
]

export const dessert = [
  {
    id: uuid(),
    name: 'CHOUX WITH BERRIES AND VANILLA ICE CREAM',
    description: '',
    price: '',
  },
  {
    id: uuid(),
    name: 'BROWNIE WITH GELATO',
    description: '',
    price: '',
  },
  {
    id: uuid(),
    name: 'CATALAN CHEESECAKE WITH BERRIES',
    description: '',
    price: '',
  },
  {
    id: uuid(),
    name: 'MEDOVIK WITH GELATO',
    description: '',
    price: '',
  },
  {
    id: uuid(),
    name: 'DONUTS WITH VANILLA',
    description: '',
    price: '',
  },
  {
    id: uuid(),
    name: 'MILLEFEUILLE',
    description: '',
    price: '',
  },
  {
    id: uuid(),
    name: 'MONTBLANC',
    description: '',
    price: '',
  },
]

export const foodMenu = [
  {
    id: uuid(),
    title: 'APPETIZERS',
    type: appetizers,
  },
  {
    id: uuid(),
    title: 'SALADS & SOUP',
    type: salads,
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
