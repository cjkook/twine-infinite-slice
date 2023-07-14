window.locations = [
  {
    name: "Piezo's Room",
    isRadioOn: false,
    isInterior: true,
    isClean: false,
    visits: 0
  },
  {
    name: "Hallway",
    isRadioOn: false,
    isInterior: true,
    visits: 0
  },
  {
    name: "Infinite Slice Lobby",
    isRadioOn: false,
    isInterior: true,
    visits: 0
  },
  {
    name: "Alleyway Fortuito",
    isRadioOn: false,
    isInterior: false,
    visits: 0
  },
  {
    name: "Plaza",
    isRadioOn: false,
    isInterior: true,
    visits: 0
  },
  {
    name: "Fortuito 144",
    isRadioOn: true,
    isInterior: true,
    visits: 0
  },
  {
    name: "Rooftop Garden",
    isRadioOn: false,
    isInterior: true,
    visits: 0
  },
];

window.characters = [
  {
    name: "Garbunkle",
    routine: {
      morning: "Rooftop Garden",
      afternoon: "Alleyway Fortuito",
      evening: "",
      night: "Kitchen",
    },
  },
  {
    name: "Ling",
    routine: {
      morning: "Ling Room",
      afternoon: "Infinite Slice Lobby",
      evening: "",
      night: "TangPingSki's",
    },
  },
  {
    name: "Miel",
    routine: {
      morning: "",
      afternoon: "",
      evening: "Alleyway Fortuito",
      night: "Fortuito 144",
    },
  },
  {
    name: "Ciccia",
    routine: {
      morning: "",
      afternoon: "",
      evening: "",
      night: "Fortuito 144",
    },
  },
  {
    name: "Choochi",
    routine: {
      morning: "Market",
      afternoon: "",
      evening: "",
      night: "TangPingSki's",
    },
  },
  {
    name: "Dirty Old Wizard",
    routine: {
      morning: "",
      afternoon: "Alleyway Fortuito",
      evening: "Plaza",
      night: "TangPingSki's",
    },
  },
  {
    name: "Filop",
    routine: {
      morning: "Blue Real Fake Estate",
      afternoon: "Blue Real Fake Estate",
      evening: "",
      night: "",
    },
  },
  {
    name: "Astropholeus",
    routine: {
      morning: "",
      afternoon: "",
      evening: "",
      night: "Fortuito 144",
    },
  },
];

window.gearDB = [
  {
    name: "Infinite Slice t-shirt",
    type: "body",
    description: "This Infinite Slice t-shirt belongs to a limited edition of one."
  },
  {
    name: "plain t-shirt",
    type: "body",
    description: "Turns out plain t-shirts have nothing to do with aviation."
  },
  {
    name: "greasy ball cap",
    type: "head",
    cool: -1,
    description: "A ball cap keeps hair out of your eyes, but doesn't stop it from being slimy."
  },
  {
    name: "short shorts",
    type: "legs",
    cool: 1,
    description: `"Massive sex appeal in these shorts."  - Piezo`
  },
  {
    name: "sneakers",
    type: "feet",
    comfort: 0.25,
  },
  {
    name: "old sneakers",
    type: "feet",
    comfort: .05,
    description: "Not an attractive set of kicks."
  },
  {
    name: "hiking boots",
    comfort: 0.25,
  },
];

window.foodItems = [
  {
    name: "water",
    price: 10,
    type: "base",
  },
  {
    name: "flour",
    price: 50,
    type: "base",
  },
  {
    name: "tomas",
    price: 30,
    type: "base",
    prepable: ["mashed", "sliced"]
  },
  {
    name: "toma sauce",
    price: 80,
    type: "processed",
  },
  {
    name: "yeast",
    price: 30,
    type: "base",
  },
  {
    name: "pizza dough",
    ingredients: ["flour", "yeast", "water"],
    price: 100,
    type: "processed",
  },
  {
    name: "cheese",
    price: 100,
    type: "base",
  },
  {
    name: "herbed cheese",
    price: 130,
    type: "base",
  },
  {
    name: "hot peppers",
    price: 45,
    type: "base",
  },
  {
    name: "broccoli",
    price: 25,
    type: "base",
  },
  {
    name: "olives",
    price: 65,
    type: "base",
  },
  {
    name: "onions",
    price: 35,
    type: "base",
  },
];

window.dishes = [
  {
    name: "cheese pizza",
    ingredients: ["shredded cheese", "toma sauce", "pizza dough"],
    type: "dish",
  },
  {
    name: "mushroom pizza",
    ingredients: ["shredded cheese", "toma sauce", "pizza dough", "mushrooms"],
    type: "dish",
  },
  {
    name: "grilled tomatoes",
    ingredients: ["tomatoes"],
    type: "final",
  },
];

window.kitchenDB = [];

window.dayList = [
  "Monra",
  "Tonra",
  "Wenra",
  "Thumra",
  "Friyaya",
  "Settum",
  "Summet",
];

// length of the game
window.gameLength = 7;
