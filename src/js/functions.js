// utility function for extracting coolor palettes
window.createPalette = (url) => {
  let lastSlash = url.lastIndexOf("/");
  let palette_str = url.slice(lastSlash + 1);
  let arr = palette_str.split("-");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = "#" + arr[i];
  }
  return arr;
};

// sets a parameter on an object representing an event
window.setDayEvent = (i, property = `test`, value = `val`) => {
  let dayEvents = State.getVar("$dayEvents"); // get story variable
  dayEvents[i][property] = value;

  // save to story variable
  State.setVar("$dayEvents", dayEvents);
};

// check day events.
window.checkDayEvent = (ev, i = null) => {
  let dayEvents = State.getVar("$dayEvents"); // get story variable

  //check specific day
  if (i) {
    return dayEvents[i][ev];
  } else {
    // check all days for event
    dayEvents.forEach((e) => {
      if (e[ev]) {
        return e[ev];
      }
    });
  }
};

// creates window objects for each day
window.makeDayEvents = () => {
  let arr = [];
  for (let i = 0; i <= gameLength - 1; i++) {
    arr[i] = {
      isFinished: false,
      dayNumber: i + 1,
      infSliceOpened: false,
    };
  }
  return arr;
};



// function to display footnote info
window.footnote = (t1, t2 = "", t3 = "") => {
  if (!document.getElementById("footnote")) {
    $('<div id="footnote" class="footnote row"></div>').appendTo("#story");
    $('<hr class="footnote-hr">').prependTo("#footnote");
    $('<div id="footnote-a" class="column"></span>').appendTo("#footnote");
    $('<div id="footnote-b" class="column"></span>').appendTo("#footnote");
    $('<div id="footnote-c" class="column"></span>').appendTo("#footnote");
  }

  $("#footnote-a").html(`<em>${t1}</em>`);
  $("#footnote-b").html(`<em>${t2}</em>`);
  $("#footnote-c").html(`<em>${t3}</em>`);
};

// function to create theme based on time. Also generates time name. Called after passage renders.
window.createTheme = (t) => {
  // empty previous boxes
  $("#background").empty();

  let bodyWidth = 0;
  let bodyLength = 0;
  //let palette = createPalette(url);
  let palette = timePalette.filter((p) => p.name == getTimeName(t));
  let bg = palette[0].background;
  let stroke = palette[0].stroke;
  palette = createPalette(palette[0].url);
  // let palette = createPalette(timePalette[timeSelect].url);
  let body = document.getElementById("background");
  body.style.background = palette[Math.floor(Math.random(palette.length))];
  $("#story").css("color", stroke);
  $("#story").css("background", bg);
  $(".footnote-hr").css("border", stroke);

  for (let i = 0; i <= palette.length * 10 - 1; i++) {
    let box = document.createElement("div");
    //let box = document.createElement("span");
    box.style.background = palette[i];
    box.className = "bg-box";
    let height = (Math.random() * window.innerHeight) / palette.length - 1;
    //let height = (Math.random() * window.innerHeight)
    bodyLength += height;
    box.style.height = height + "px";
    //box.style.width = Math.random() * 10;
    box.style.bottom = bodyLength + "px";
    box.style.left =
      Math.random() * window.innerWidth - window.innerWidth / 2 + "px";
    body.appendChild(box);

    if (i === palette.length - 1 && bodyLength < window.innerHeight) {
      i = 0;
    }
  }
};

// RETURNS day name
window.getDayName = (num) => {
  let dayName = window.dayList[num % 6];

  return dayName;
};

window.getTimeName = (time) => {
  let name = "";
  if (time >= 5 && time <= 12) {
    name = "morning";
    State.setVar("$timeName", name);
  } else if (time >= 12 && time <= 17) {
    name = "afternoon";
    State.setVar("$timeName", name);
  } else if (time >= 17 && time <= 21) {
    name = "evening";
    State.setVar("$timeName", name);
  } else if ((time >= 21 && time <= 24) || time <= 5) {
    name = "night";
    State.setVar("$timeName", name);
  }
  return name;
};

// get human readable time
window.getClock = (t) => {
  const hour = Math.floor(t);
  let min = ((t - hour) * 60).toFixed(0);
  if (min < 10) min = "0" + min;

  return `${hour}:${min}`;
};

//check characters in certain location at certain time of day
window.checkLocationCharacters = (loc, t) => {
  let chars = State.getVar("$characters") || window.characters;
  
  let time = window.getTimeName(t);

  console.log(chars, loc, time)
  let localChars = chars.filter((c) => c.routine[time] == loc);
  console.log(localChars);
};
checkLocationCharacters("Club",23);
