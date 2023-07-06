let url =
  "https://coolors.co/palette/fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a";

/* Execute the handler function each time the event triggers. */
$(document).on(":passagestart", function (ev) {
  /* JavaScript code */
  window.advance();
});

/* executes when the passage finishes rendering */
$(document).on(":passagerender", function (ev) {
  //$(ev.content).append("//At the end of some renderings.//");

  // update theme
  createTheme(State.getVar("$timeCount"));
  // update UI elements
  update();
});

/* FUNCTIONS */
// function called to update time/oomph when the passage is advanced
window.advance = (time = 0.025, oomph = 0.25) => {
  let t1 = State.getVar("$timeCount");
  let t2 = t1 + time;

  // advance the calendar
  if (t2 > 24) {
    let dayEvents = State.getVar("$dayEvents")
    let day = State.getVar("$day");
    console.log(day)
    day++
    dayEvents[day].isFinished = true;

    // update story variables
    State.setVar("$day", day);
    State.setVar("$dayEvents", dayEvents)
    console.log(dayEvents[day].dayName)
    console.log(day)
    t2 -= 24;
  }

  // new time
  State.setVar("$timeCount", t2);
  State.setVar("$time", getClock(t2));
  console.log(getClock(t2));

  // handle oomph
  let piezo = State.getVar("$piezo");
  piezo.oomph -= oomph;
  State.setVar("$piezo", piezo);
  console.log(piezo);
};

// function to update UI elements
window.update = () => {
  $("#money").html(`$${State.getVar("$money")}`);
  $("#location-text").html(`${State.getVar("$location")}`);
  $("#oomph").val(State.getVar("$piezo").oomph);

  let inventory = State.getVar("$inventory")
  $("#inventory").html()
};

/* PAGE INIT */
// UI bar configuration upload load
// Config.ui.stowBarInitially = true;
// document.getElementById("history-backward").remove();
document.getElementById("history-forward").remove();
document.getElementById("menu-item-saves").remove();
//document.getElementById("menu-item-restart").remove();
if (!document.getElementById("money")) {
  $('<div id="money"></div>').appendTo($("#ui-bar-body"));
}

if (!document.getElementById("oomph")) {
  $(`<label for="oomph">oomph</label>
  <progress id="oomph" value="100" max="100"></progress>`).appendTo(
    $("#ui-bar-body")
  );
}
if (!document.getElementById("health")) {
  $(`<label for="health">health</label>
  <progress id="health" value="50" max="100"></progress>`).appendTo(
    $("#ui-bar-body")
  );
}
if(!document.getElementById("inventory")) {
  $(`<div id="inventory">inventory<hr></div>`).appendTo("#ui-bar-body")
}
if(!document.getElementById("equipment")) {
  $(`<div id="equipment">equipment<hr></div>`).appendTo("#ui-bar-body")
}
if (!document.getElementById("background")) {
  $('<div id="background"></div>').prependTo($("#story"));
}
if (!document.getElementById("location-text")) {
  $('<div id="location-text"></div>').prependTo($("#story"));
}
