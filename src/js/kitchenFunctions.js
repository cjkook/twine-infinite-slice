window.getPreps = (player) => {
  let flour,
    water,
    yeast = false;
  let prepables = [];
  let foods = player.foodInventory;
  foods.forEach((food) => {
    if (food.name === "flour") {
      flour = true;
    }
    if (food.name === "water") {
      water = true;
    }
    if (food.name === "yeast") {
      yeast = true;
    }
    if (food.prepable != undefined) {
      console.log("hit");
      prepables.push(food);
    }
  });
  // update prepables and dough capability
  if (flour && water && yeast) {
    State.setVar("$canMakeDough", true);
  }
  player.prepables = prepables;
  State.setVar("$piezo", player);
};

window.resetPreps = () => {
  let player = State.getVar("$piezo");
  player.prepables = [];
  State.setVar("$canMakeDough", false);
  State.setVar("$piezo", player);
};

window.makeDough = (player) => {
  let foods = player.foodInventory;
  let needed = ["flour", "water", "yeast"]
  for (let i = 0; i <= needed.length-1; i++) {
    foods.forEach((food, index) => {
      if (food.name === needed[i]) {
        foods.splice(index, 1);
      }
    });
  }

  addFood("pizza dough");
  console.log(foods);
  // remove flag
  State.setVar("$canMakeDough", false);
};
