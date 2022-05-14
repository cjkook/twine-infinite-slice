// utility function for extracting coolor palettes
window.createPalette = (url) => {
  let lastSlash = url.lastIndexOf("/");
  let palette_str = url.slice(lastSlash + 1);
  let arr = palette_str.split("-");

  for (let i = 0; i < arr.length; i++) {
      arr[i] = "#" + arr[i];
  }
  return arr;
}


// function to display footnote info
window.footnote = (t1, t2 = '',t3 = '') => {
  if(!document.getElementById("footnote")) {
    $('<div id="footnote" class="footnote row"></div>').appendTo('#story');
    $('<hr class="footnote-hr">').prependTo('#footnote');
    $('<div id="footnote-a" class="column"></span>').appendTo('#footnote');
    $('<div id="footnote-b" class="column"></span>').appendTo('#footnote');
    $('<div id="footnote-c" class="column"></span>').appendTo('#footnote');
  }
  
  $('#footnote-a').html(`<em>${t1}</em>`)
  $('#footnote-b').html(`<em>${t2}</em>`)
  $('#footnote-c').html(`<em>${t3}</em>`)
  }
  
  // function to create theme based on time. Also generates time name. Called after passage renders.
  window.createTheme = (time=6) => {
  // empty previous boxes
  $('#background').empty()
  
  // pick palette based on time
  let timeSelect = 0;
  if((time >= 5) && (time <=12)) { // morning
    timeSelect = 2;
    State.setVar("$timeName","morning");
  }
  else if((time >=12)&&(time<=17)) { // afternoon
    timeSelect = 4;
    State.setVar("$timeName","afternoon");
  }
  else if((time >=17)&&(time<=21)) { // evening
    timeSelect = 1;
    State.setVar("$timeName","evening");
  }
  else if(((time>=21)&&(time<=24))||time<=5) { // night
    timeSelect = 3;
    State.setVar("$timeName","night");
  }
    let bodyWidth = 0;
    let bodyLength = 0;
    //let palette = createPalette(url);
    let palette = createPalette(timePalette[timeSelect].url);
    let body = document.getElementById('background');
    body.style.background = palette[Math.floor(Math.random(palette.length))];
    $("#story").css("color", timePalette[timeSelect].stroke);
    $("#story").css("background", timePalette[timeSelect].background);
    $(".footnote-hr").css("border", timePalette[timeSelect].stroke);
    
    for (let i = 0; i <= palette.length*10 - 1; i++) {
        let box = document.createElement("div");
        //let box = document.createElement("span");
        box.style.background = palette[i];
        box.className = "bg-box";
        let height = (Math.random() * window.innerHeight) / (palette.length) - 1;
        //let height = (Math.random() * window.innerHeight)
        bodyLength += height;
        box.style.height = height + "px";
        //box.style.width = Math.random() * 10;
        box.style.bottom = bodyLength + "px";
        box.style.left = (Math.random() * window.innerWidth - window.innerWidth / 2) + "px";
        body.appendChild(box);
  
        if (i === palette.length - 1 && bodyLength < window.innerHeight) {
            i = 0;
        }
    }
  }
  
  // RETURNS day name
  window.getDayName = (num) => {
  let dayName = window.dayList[num % 6];
  
  return dayName;
  }
  
  // get human readable time
  window.getTime = (t) => {
  const hour = Math.floor(t);
  let min = ((t - hour) * 60).toFixed(0);
  if(min < 10) min = "0" + min;
  
  return `${hour}:${min}`
  }
  
  // length of the game
  window.gameLength = 7;
  
  // creates window objects for each day
  window.dayEvents = (() => {
    let arr = [];
    for(let i = 0; i <= gameLength-1; i++) {
      arr[i] = {
        isFinished: false,
      }
    }
    return arr;
  })();
  