window.locations = [
  {
    name: "Piezo Room",
    isRadioOn: false,
    isInterior: true,
  },
  {
    name: "Hallway",
    isRadioOn: false,
    isInterior: true,
  },
  {
    name: "Infinite Slice Lobby",
    isRadioOn: false,
    isInterior: true,
  },
  {
    name: "Alleyway",
    isRadioOn: false,
    isInterior: false,
  },
  {
    name: "Plaza",
    isRadioOn: false,
    isInterior: true,
  },
  {
    name: "Kitchen",
    isRadioOn: false,
    isInterior: true,
  },
];

window.characters = [
  {
    name: "Garbunkle",
    routine: {
      morning: "Rooftop",
      afternoon: "Alleyway",
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
      evening: "Alleyway",
      night: "Club",
    },
  },
  {
    name: "Ciccia",
    routine: {
      morning: "",
      afternoon: "",
      evening: "",
      night: "Club",
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
      afternoon: "Alleyway",
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
];

window.gearDB = [
  {
    name: "Infinite Slice t-shirt",
    type: "body",
  },
  {
    name: "plain t-shirt",
    type: "body",
  },
  {
    name: "greasy ball cap",
    type: "head",
    cool: -1,
  },
  {
    name: "short shorts",
    type: "legs",
    cool: 1,
  },
  {
    name: "sneakers",
    type: "feet",
    comfort: 0.25,
  },
  {
    name: "hiking boots",
    comfort: 0.25,
  },
];

window.foodItems = [
  {
    name: "flour",
    price: 50,
    type: "base",
  },
  {
    name: "tomatoes",
    price: 30,
    type: "raw",
  },
  {
    name: "tomato sauce",
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
    ingredients: ["flour", "yeast"],
    price: 100,
    type: "processed",
  },
  {
    name: "cheese",
    price: 100,
    type: "processed",
  },
  {
    name: "hot peppers",
    price: 45,
    type: "raw",
  },
  {
    name: "broccoli",
    price: 25,
    type: "raw",
  },
  {
    name: "olives",
    price: 65,
    type: "raw",
  },
  {
    name: "onions",
    price: 35,
    type: "raw",
  },
];

window.dishes = [
  {
    name: "cheese pizza",
    ingredients: ["cheese", "tomato sauce", "pizza dough"],
    price: 200,
    type: "final",
    wow: 0.2,
  },
  {
    name: "mushroom pizza",
    ingredients: ["cheese", "tomato sauce", "pizza dough", "mushrooms"],
    price: 240,
    type: "final",
    wow: 0.22,
  },
  {
    name: "grilled tomatoes",
    ingredients: ["tomatoes"],
    price: 80,
    type: "final",
    wow: 0.05,
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
