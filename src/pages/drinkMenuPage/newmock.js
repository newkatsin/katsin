import { v4 as uuid } from 'uuid';

const otherDrinks = [
  {
    id: uuid(),
    drinkTitle: 'AMARO',
    drink: [
      {
        id: uuid(),
        name: 'AMARO MONTENEGRO',
        price: '13',
      },
      {
        id: uuid(),
        name: 'AVERNA AMARO',
        price: '11',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Vermouth',
    drink: [
      {
        id: uuid(),
        name: 'CARPANO ANTICA FORMULA',
        price: '20',
      },
      {
        id: uuid(),
        name: 'MARTINI ROSSO-BIANCO-FIERO',
        price: '13',
      },
      {
        id: uuid(),
        name: 'MARTINI RISERVA SPECIALE AMBRATO-RUBINO',
        price: '15',
      },
      {
        id: uuid(),
        name: 'NOILLY PRAT',
        price: '15',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Bitter',
    drink: [
      {
        id: uuid(),
        name: 'CAMPARI',
        price: '11',
      },
      {
        id: uuid(),
        name: 'APEROL',
        price: '11',
      },
      {
        id: uuid(),
        name: 'MARTINI',
        price: '11',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Gin',
    drink: [
      {
        id: uuid(),
        name: 'Bombey Sapphire',
        price: '14',
      },
      {
        id: uuid(),
        name: 'THE BOTANIST',
        price: '15',
      },
      {
        id: uuid(),
        name: 'FORDS',
        price: '11',
      },
      {
        id: uuid(),
        name: 'HENDRICK`S',
        price: '15',
      },
      {
        id: uuid(),
        name: 'MONKEY 47',
        price: '21',
      },
      {
        id: uuid(),
        name: 'TANQUERAY',
        price: '13',
      },
      {
        id: uuid(),
        name: 'TANQUERAY No10',
        price: '15',
      },
      {
        id: uuid(),
        name: 'Roku',
        price: '14',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Mezcal',
    drink: [
      {
        id: uuid(),
        name: 'MONTELOBOS',
        price: '13',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Vodka',
    drink: [
      {
        id: uuid(),
        name: 'KETEL ONE (fhp)',
        price: '15',
      },
      {
        id: uuid(),
        name: 'ABSOLUT ELYX',
        price: '16',
      },
      {
        id: uuid(),
        name: 'BELVEDER',
        price: '17',
      },
      {
        id: uuid(),
        name: 'GREY GOOSE',
        price: '16',
      },
      {
        id: uuid(),
        name: 'HAKU',
        price: '14',
      },
      {
        id: uuid(),
        name: 'STOLI ELIT',
        price: '11',
      },
      {
        id: uuid(),
        name: 'TITO`S',
        price: '14',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Grappa',
    drink: [
      {
        id: uuid(),
        name: 'NONINO CHARDONAY',
        price: '23',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Sake',
    drink: [
      {
        id: uuid(),
        name: 'Akashi Tai',
        price: '12',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Beer',
    drink: [
      {
        id: uuid(),
        name: 'GUINESS',
        price: '8',
      },
      {
        id: uuid(),
        name: 'STELLA ARTOIS',
        price: '8',
      },
      {
        id: uuid(),
        name: 'MODELO',
        price: '9',
      },
      {
        id: uuid(),
        name: 'BUDWAISER BUD LIGHT',
        price: '9',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Rum',
    drink: [
      {
        id: uuid(),
        name: 'APPLETON 12',
        price: '16',
      },
      {
        id: uuid(),
        name: 'APPLETON 15',
        price: '23',
      },
      {
        id: uuid(),
        name: 'DIPLOMATICO',
        price: '14',
      },
      {
        id: uuid(),
        name: 'FLOR DE CANA 30',
        price: '205',
      },
      {
        id: uuid(),
        name: 'ZACAPA 23',
        price: '15',
      },
      {
        id: uuid(),
        name: 'BACARDI 8',
        price: '11',
      },
      {
        id: uuid(),
        name: 'BACARDI 10',
        price: '13',
      },
      {
        id: uuid(),
        name: 'BACARDI 4',
        price: '7',
      },
      {
        id: uuid(),
        name: 'ANGOSTURA 7',
        price: '13',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Brandy / Cognac',
    drink: [
      {
        id: uuid(),
        name: 'HENNESSY V.S.O.P.',
        price: '22',
      },
      {
        id: uuid(),
        name: 'HENNESSY X.O.',
        price: '95',
      },
      {
        id: uuid(),
        name: 'VASPURAKAN',
        price: '15',
      },
      {
        id: uuid(),
        name: 'DVIN',
        price: '20',
      },
      {
        id: uuid(),
        name: 'NAIRI',
        price: '25',
      },
      {
        id: uuid(),
        name: 'AZNAVOUR',
        price: '40',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Liqueurs',
    drink: [
      {
        id: uuid(),
        name: 'COINTREAU',
        price: '17',
      },
      {
        id: uuid(),
        name: 'CHARTREUS',
        price: '14',
      },
      {
        id: uuid(),
        name: 'DISARONNO',
        price: '17',
      },
      {
        id: uuid(),
        name: 'ANCHO REYES',
        price: '12',
      },
      {
        id: uuid(),
        name: 'MR. BLACK',
        price: '17',
      },
      {
        id: uuid(),
        name: 'FERNET BRANCA',
        price: '12',
      },
      {
        id: uuid(),
        name: 'BAILEYS',
        price: '13',
      },
      {
        id: uuid(),
        name: 'FRANGELICO',
        price: '13',
      },
      {
        id: uuid(),
        name: 'KAHLUA',
        price: '17',
      },
      {
        id: uuid(),
        name: 'ST-GERMAIN',
        price: '13',
      },
      {
        id: uuid(),
        name: 'PASSOA',
        price: '14',
      },
      {
        id: uuid(),
        name: 'DRAMBUIE',
        price: '14',
      },
      {
        id: uuid(),
        name: 'ITALICUS',
        price: '17',
      },
    ],
  },
];

const whiskeys = [
  {
    id: uuid(),
    drinkTitle: 'BURBON / AMERICAN RYE / AMERICAN WHISKEY',
    drink: [
      {
        id: uuid(),
        name: 'BULLIET',
        price: '15',
      },
      {
        id: uuid(),
        name: 'ELIJAH CRAIG',
        price: '14',
      },
      {
        id: uuid(),
        name: 'ELIJAH CRAIG 18',
        price: '43',
      },
      {
        id: uuid(),
        name: 'FOUR ROSES SINGLE BARREL',
        price: '19',
      },
      {
        id: uuid(),
        name: 'FOUR ROSES YELLOW',
        price: '13',
      },
      {
        id: uuid(),
        name: 'KNOB CREEK',
        price: '16',
      },
      {
        id: uuid(),
        name: 'MAKER`S MARK',
        price: '15',
      },
      {
        id: uuid(),
        name: 'MICHTER`S SMALL BATCH US-1',
        price: '16',
      },
      {
        id: uuid(),
        name: 'WOODFORD RESERVE',
        price: '18',
      },
      {
        id: uuid(),
        name: 'HUDSON MAPLE CASK',
        price: '19',
      },
      {
        id: uuid(),
        name: 'MICHTER`S US-1 SINGLE BARREL',
        price: '16',
      },
      {
        id: uuid(),
        name: 'MICHTER`S US-1 SOUR MASH',
        price: '16',
      },
      {
        id: uuid(),
        name: 'RUSSELL`S RESERVE 6',
        price: '15',
      },
      {
        id: uuid(),
        name: 'RUSSELL`S RESERVE 10',
        price: '16',
      },
      {
        id: uuid(),
        name: 'WOODINVILLE',
        price: '18',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'JAPANESE WHISKY',
    drink: [
      {
        id: uuid(),
        name: 'HATOZAKI JAPANESE FINEST',
        price: '16',
      },
      {
        id: uuid(),
        name: 'HATOZAKI SMALL BATCH',
        price: '18',
      },
      {
        id: uuid(),
        name: 'NIKKA FROM THE BARREL',
        price: '25',
      },
      {
        id: uuid(),
        name: 'NIKKA SINGLE MALT 15',
        price: '65',
      },
      {
        id: uuid(),
        name: 'NIKKA PURE MALT TAKETSURU',
        price: '25',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'TAIWANESE WHISKY',
    drink: [
      {
        id: uuid(),
        name: 'KAVALAN',
        price: '59',
      },
      {
        id: uuid(),
        name: 'KAVALAN SHERRY OAK',
        price: '45',
      },
      {
        id: uuid(),
        name: 'KAVALAN CONCERTMASTER',
        price: '25',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Scotch whisky',
    drink: [
      {
        id: uuid(),
        name: 'DALWHINNIE 15',
        price: '27',
      },
      {
        id: uuid(),
        name: 'DALMORE CIGAR MALT RESERVE',
        price: '47',
      },
      {
        id: uuid(),
        name: 'OBAN 14',
        price: '35',
      },
      {
        id: uuid(),
        name: 'ARDBEG 10',
        price: '22',
      },
      {
        id: uuid(),
        name: 'LAGAVULIN 16',
        price: '38',
      },
      {
        id: uuid(),
        name: 'LAPHROAIG 10',
        price: '22',
      },
      {
        id: uuid(),
        name: 'AUCHENTOSHAN 3 WOOD',
        price: '21',
      },
      {
        id: uuid(),
        name: 'HIGHLAND PARK 12',
        price: '17',
      },
      {
        id: uuid(),
        name: 'HIGHLAND PARK 18',
        price: '42',
      },
      {
        id: uuid(),
        name: 'JOHNNIE WALKER BLACK LABEL',
        price: '19',
      },
      {
        id: uuid(),
        name: 'JOHNNIE WALKER BLUE LABEL',
        price: '78',
      },
      {
        id: uuid(),
        name: 'MONKEY SHOULDER',
        price: '17',
      },
      {
        id: uuid(),
        name: 'BALVENIE 12',
        price: '23',
      },
      {
        id: uuid(),
        name: 'BALVENIE 16',
        price: '36',
      },
      {
        id: uuid(),
        name: 'BALVENIE 21 PORTWOOD',
        price: '68',
      },
      {
        id: uuid(),
        name: 'GLENFIDDICH 12',
        price: '20',
      },
      {
        id: uuid(),
        name: 'GLENFIDDICH 15',
        price: '32',
      },
      {
        id: uuid(),
        name: 'GLENFIDDICH 18',
        price: '44',
      },
      {
        id: uuid(),
        name: 'GLENFIDDICH 23',
        price: '75',
      },
      {
        id: uuid(),
        name: 'GLENLIVET 12',
        price: '16',
      },
      {
        id: uuid(),
        name: 'GLENLIVET 14',
        price: '31',
      },
      {
        id: uuid(),
        name: 'GLENLIVET 15',
        price: '32',
      },
      {
        id: uuid(),
        name: 'GLENLIVET 18',
        price: '43',
      },
      {
        id: uuid(),
        name: 'MACALLAN 12',
        price: '28',
      },
      {
        id: uuid(),
        name: 'MACALLAN 15',
        price: '49',
      },
      {
        id: uuid(),
        name: 'MACALLAN 18',
        price: '88',
      },
      {
        id: uuid(),
        name: 'MACALLAN 25',
        price: '340',
      },
      {
        id: uuid(),
        name: 'MACALLAN 30',
        price: '670',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'irish whiskey',
    drink: [
      {
        id: uuid(),
        name: 'RED BREAST 12',
        price: '21',
      },
      {
        id: uuid(),
        name: 'RED BREAST 21',
        price: '57',
      },
      {
        id: uuid(),
        name: 'JAMESON',
        price: '12',
      },
      {
        id: uuid(),
        name: 'TULLAMORE DEW',
        price: '14',
      },
      {
        id: uuid(),
        name: 'TULLAMORE DEW 14',
        price: '19',
      },
      {
        id: uuid(),
        name: 'CONNEMARA',
        price: '15',
      },
    ],
  },
];

const tequila = [
  {
    id: uuid(),
    drinkTitle: 'Tequila (blanco-reposado-anejo)',
    drink: [
      {
        id: uuid(),
        name: 'CASAMIGOS',
        price: '17',
      },
      {
        id: uuid(),
        name: 'DON JULIO',
        price: '22',
      },
      {
        id: uuid(),
        name: 'PATRON',
        price: '17',
      },
      {
        id: uuid(),
        name: 'OCHO',
        price: '19',
      },
      {
        id: uuid(),
        name: 'CLASE AZUL',
        price: '45',
      },
      {
        id: uuid(),
        name: 'HERRADURA',
        price: '21',
      },
      {
        id: uuid(),
        name: 'AVION',
        price: '19',
      },
      {
        id: uuid(),
        name: 'CASA DRAGONES',
        price: '32',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Tequila extra anejo',
    drink: [
      {
        id: uuid(),
        name: '1942',
        price: '48',
      },
      {
        id: uuid(),
        name: 'JOSE CUERVO',
        price: '44',
      },
      {
        id: uuid(),
        name: 'OCHO',
        price: '65',
      },
      {
        id: uuid(),
        name: 'AVION',
        price: '48',
      },
      {
        id: uuid(),
        name: 'CLASE AZUL',
        price: '222',
      },
    ],
  },
];
const wine = [
  {
    id: uuid(),
    drinkTitle: 'WINE BY THE GLASS Sparkling Whites',
    drink: [
      {
        id: uuid(),
        name: 'Prosseco',
        price: '13',
      },
      {
        id: uuid(),
        name: 'MOET CHANDON IMPERIAL',
        price: '24',
      },
      {
        id: uuid(),
        name: 'MOET CHANDON ROSE IMPERIAL',
        price: '27',
      },
      {
        id: uuid(),
        name: 'VEUVE CLICQUOT BRUT YELLOW LABEL',
        price: '25',
      },
      {
        id: uuid(),
        name: 'Cloudy Bay Sauvignon Blanc',
        price: '15',
      },
      {
        id: uuid(),
        name: 'Mer Soleil Santa Lucia Highlands Chardonnay 21',
        price: '12',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Rose',
    drink: [
      {
        id: uuid(),
        name: 'Gerard Bertrand Cotes De Roses Rose 22',
        price: '13',
      },
      {
        id: uuid(),
        name: 'WHISPERING ANGEL ROSE',
        price: '13',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Red',
    drink: [
      {
        id: uuid(),
        name: 'Davis Bynum Russian River Valley Pinot Noir 21',
        price: '17',
      },
      {
        id: uuid(),
        name: 'Caymus Suisun Walking Fool Red Blend 21',
        price: '16',
      },
      {
        id: uuid(),
        name: 'Charles Krug Napa Valley Cabernet 20',
        price: '19',
      },
      {
        id: uuid(),
        name: 'JOSEPH PHELPS CABERNET SAUVIGNON',
        price: '32',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Sweet/Dessert Wine',
    drink: [
      {
        id: uuid(),
        name: 'B&G France Sauternes 18',
        price: '13',
      },
    ],
  },
];
const cocktails = [
  {
    id: uuid(),
    drinkTitle: 'Signature',
    drink: [
      {
        id: uuid(),
        name: 'RH -',
        description: '(TANQUERAY, ORANGE JUICE, LIME JUICE ANGOSTURA ORANGE BITTERS)',
        price: '18',
      },
      {
        id: uuid(),
        name: 'Crazy Woman',
        description: '(FORDS GIN, CARCADE, JASMINE, ST-GERMAIN, LEMON & LIME , EGG WHITE)',
        price: '18',
      },
      {
        id: uuid(),
        name: 'Tai Flowers',
        description: '(COINTREAU, LEMON JUICE, SIMPLE SYRUP, EGG WHITE)',
        price: '19',
      },
      {
        id: uuid(),
        name: 'Pink Floyd',
        description: '(ANGOSTURA 5YO, VIOLET, FALERNUM, LIME JUICE)',
        price: '18',
      },
      {
        id: uuid(),
        name: 'BLIMEY',
        description: '(KETEL ONE, BLACKBERRIES, LEMON-LIME, GIFFARD-CASSIS NOIR DE BOURGOGNE)',
        price: '17',
      },
      {
        id: uuid(),
        name: 'CALIFORNIAN MARGARITA',
        description: '(DON JULIO BLANCO, COINTREAU, LEMON & LIME MIX, VIOLET, SEA SALT)',
        price: '17',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Sour',
    drink: [
      {
        id: uuid(),
        name: 'Apple Calvados Sour',
        description: '(CALVADOS, PEACHTREE, HOMEMADE HONEY SYRUP, LIME JUICE, EGG WHITE)',
        price: '18',
      },
      {
        id: uuid(),
        name: 'New York Sour',
        description: '(FOUR ROSES, SIMPLE SYRUP, LEMON JUICE, EGG WHITE, RED WINE)',
        price: '18',
      },
      {
        id: uuid(),
        name: 'Whiskey Sour',
        description: '(FOUR ROSES, SIMPLE SYRUP, LEMON JUICE, EGG WHITE)',
        price: '18',
      },
      {
        id: uuid(),
        name: 'Amaretto Sour',
        description: '(DISARONNO)',
        price: '18',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Fizz',
    drink: [
      {
        id: uuid(),
        name: 'White Peach Fizz',
        description: "(HENDRICK'S, WHITE PEACH FEVER-TREE PREMIUM CLASSIC TONIC WATER)",
        price: '18',
      },
      {
        id: uuid(),
        name: 'Bergamote Gin Fizz',
        description: '(THE BOTANIST GIN, ITALICUS, FEVER-TREE MEDITERRANEAN TONIC WATER)',
        price: '17',
      },
      {
        id: uuid(),
        name: 'Tropic FizZ',
        description: '(BACARDI 4, HOMEMADE TROPICAL MIX, FEVER-TREE ELDERFLOWER TONIC WATER)',
        price: '17',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Negroni',
    drink: [
      {
        id: uuid(),
        name: 'Bulvardier',
        description: "(CAMPARI, ANTICA FORMULA, RUSSELL'S RESERVE 6)",
        price: '19',
      },
      {
        id: uuid(),
        name: 'Americano',
        description: '(CAMPARI, ANTICA FORMULA, FEVER-TREE PREMIUM CLUB SODA)',
        price: '17',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Spritz',
    drink: [
      {
        id: uuid(),
        name: 'Ikigai',
        description: '(AKASHI TAI SAKE, FEVER-TREE SPARKLING LIME&YUZU)',
        price: '17',
      },
      {
        id: uuid(),
        name: 'Aperol',
        description: '(APEROL, MIONETTO, FEVER-TREE PREMIUM CLUB SODA)',
        price: '18',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Old Fasioned',
    drink: [
      {
        id: uuid(),
        name: 'Rum Old Fasioned',
        description: '(FLOR DE CANA 12)',
        price: '19',
      },
      {
        id: uuid(),
        name: 'Hennessy Old Fashioned',
        description: '(HENNESSY V.S.O.P.)',
        price: '18',
      },
      {
        id: uuid(),
        name: 'BANANA OLD FASHIONED',
        description: '(WOODINVILLE, GIFFARD BANANE DU BRESIL)',
        price: '17',
      },
      {
        id: uuid(),
        name: 'ANOTHER OLD FASHIONED',
        description: '(BULLIET, DISARONNO, RED WINE)',
        price: '18',
      },
    ],
  },
];

const nonAlcoholic = [
  {
    id: uuid(),
    drinkTitle: 'Homemade lemonades',
    drink: [
      {
        id: uuid(),
        name: 'Berry',
        price: '9',
      },
      {
        id: uuid(),
        name: 'Tropic',
        price: '9',
      },
      {
        id: uuid(),
        name: 'Citrus',
        price: '9',
      },
      {
        id: uuid(),
        name: 'Violet',
        price: '9',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Fresh Squeezed juice',
    drink: [
      {
        id: uuid(),
        name: 'ORANGE',
        price: '11',
      },
      {
        id: uuid(),
        name: 'APPLE-CARROT',
        price: '11',
      },
      {
        id: uuid(),
        name: 'STRAWBERRY-BANANA',
        price: '11',
      },
      {
        id: uuid(),
        name: 'MANGO STRAWBERRY LIMELate',
        price: '11',
      },
      {
        id: uuid(),
        name: 'PINEAPPLE GINGER POMEGRANATE',
        price: '11',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Coffee',
    drink: [
      {
        id: uuid(),
        name: 'Espresso',
        price: '5',
      },
      {
        id: uuid(),
        name: 'Americano',
        price: '6',
      },
      {
        id: uuid(),
        name: 'Cappucino',
        price: '7',
      },
      {
        id: uuid(),
        name: 'Late',
        price: '7',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'TEA',
    drink: [
      {
        id: uuid(),
        name: 'Earl Grey',
        price: '8',
      },
      {
        id: uuid(),
        name: 'Jasmine',
        price: '8',
      },
      {
        id: uuid(),
        name: 'Armenian herbs',
        price: '8',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Soft Drinks',
    drink: [
      {
        id: uuid(),
        name: 'Mexican coke',
        price: '6',
      },
      {
        id: uuid(),
        name: 'Sprite',
        price: '6',
      },
      {
        id: uuid(),
        name: 'FEVER-TREE PREMIUM CLASSIC TONIC WATER',
        price: '7',
      },
      {
        id: uuid(),
        name: 'FEVER-TREE GINGER BEER',
        price: '7',
      },
      {
        id: uuid(),
        name: 'Water',
        price: '8',
      },
      {
        id: uuid(),
        name: 'Mineral water',
        price: '8',
      },
    ],
  },
];

export const newdrinkMenu = [
  {
    id: uuid(),
    title: 'Whiskey',
    drinks: whiskeys,
  },
  {
    id: uuid(),
    title: 'Tequila',
    drinks: tequila,
  },
  {
    id: uuid(),
    title: 'wine',
    drinks: wine,
  },
  {
    id: uuid(),
    title: 'COCKTAILS',
    drinks: cocktails,
  },
  {
    id: uuid(),
    title: 'other drinks',
    drinks: otherDrinks,
  },
  {
    id: uuid(),
    title: 'non alcoholic',
    drinks: nonAlcoholic,
  },
];
