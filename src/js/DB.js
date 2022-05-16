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
      night: "Kitchen"
    }
  },
  {
    name: "Ling",
    routine: {
      morning: "Ling Room",
      afternoon: "Infinite Slice Lobby",
      evening: "",
      night: "TangPingSki's"
    }
  },
  {
    name: "Miel",
    routine: {
      morning: "",
      afternoon: "",
      evening: "Alleyway",
      night: "Club"
    }
  },
  {
    name: "Ciccia",
    routine: {
      morning: "",
      afternoon: "",
      evening: "",
      night: "Club"
    }
  },
  {
    name: "Choochi",
    routine: {
      morning: "Market",
      afternoon: "",
      evening: "",
      night: "TangPingSki's"
    }
  },
  {
    name: "Dirty Old Wizard",
    routine: {
      morning: "",
      afternoon: "Alleyway",
      evening: "Plaza",
      night: "TangPingSki's"
    }
  },

]

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

window.foodDB = [];

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


