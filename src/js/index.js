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
    let dayEvents = State.getVar("$dayEvents");
    let day = State.getVar("$day");
    console.log(day);
    day++;
    dayEvents[day].isFinished = true;

    // update story variables
    State.setVar("$day", day);
    State.setVar("$dayEvents", dayEvents);
    console.log(dayEvents[day].dayName);
    console.log(day);
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

  let inventory = State.getVar("$inventory");
  // ! make inv
  $("#inventory").html();
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
if (!document.getElementById("inventory")) {
  $(`<div id="inventory">inventory<hr></div>`).appendTo("#ui-bar-body");
}
if (!document.getElementById("equipment")) {
  $(`<div id="equipment">equipment<hr></div>`).appendTo("#ui-bar-body");
}
if (!document.getElementById("background")) {
  $('<div id="background"></div>').prependTo($("#story"));
}
if (!document.getElementById("location-text")) {
  $('<div id="location-text"></div>').prependTo($("#story"));
}

/* HOVERTIP */
/* hovertip v2.0 - Start */
window.UpdateHoverTipTxt = function (container) {
  if (Engine.isIdle()) {
    clearInterval(HTTIntervalID);
    if (container === undefined) {
      container = $(document);
    } else {
      container = $(container);
    }
    var i,
      id,
      top,
      left,
      parent,
      elementList,
      element,
      hoverPos,
      boxPos,
      zindex;
    elementList = container.find('span[id^="hoverTipTxt"]');
    for (i = 0; i < elementList.length; i++) {
      element = $(elementList[i]);
      id = elementList[i].id.substring(11);
      /* Find parent hoverTip item on the page. */
      parent = $(container).find("#hoverTip" + id);
      /* Position bottom of hoverTipTxt just above the parent. */
      top = Math.round(-element.outerHeight() - 6);
      /* Center hoverTipTxt horizontally over parent. */
      left = Math.round((parent.outerWidth() - element.outerWidth()) / 2);
      /* See if the hoverTip is contained by something with a higher z-index. */
      zindex = element.css("z-index");
      if (zindex === "auto") {
        zindex = 0;
      } else {
        zindex = parseInt(zindex, 10);
      }
      while (parent.parent()[0] !== document) {
        if (
          parent.parent().css("z-index") !== "auto" &&
          parseInt(parent.parent().css("z-index"), 10) > zindex
        ) {
          /* Get container rect. */
          boxPos = parent[0].getBoundingClientRect();
          break;
        }
        parent = parent.parent();
      }
      /* Update position. */
      element.css({ top: top, left: left });
      hoverPos = element[0].getBoundingClientRect();
      /* Make sure the text isn't outside the bottom of the screen. */
      if (hoverPos.top > window.innerHeight - hoverPos.height - 10) {
        top -= hoverPos.top - (window.innerHeight - hoverPos.height - 10);
      }
      /* Make sure the text isn't outside the top of the screen. */
      if (hoverPos.top < 4) {
        top -= hoverPos.top - 4;
      }
      /* Make sure the text isn't outside the right of the screen. */
      if (hoverPos.left > window.innerWidth - hoverPos.width - 26) {
        left -= hoverPos.left - (window.innerWidth - hoverPos.width - 26);
      }
      /* Make sure the text isn't outside the left of the screen. */
      if (hoverPos.left < 4) {
        left -= hoverPos.left - 4;
      }
      /* Update position. */
      element.css({ top: Math.round(top), left: Math.round(left) });
      hoverPos = element[0].getBoundingClientRect();
      if (boxPos) {
        /* Fit within dialog boxes and the like. */
        /* Make sure the text isn't outside the bottom of the box. */
        if (hoverPos.top > boxPos.bottom - hoverPos.height - 10) {
          top -= hoverPos.top - (boxPos.bottom - hoverPos.height - 10);
        }
        /* Make sure the text isn't outside the top of the box. */
        if (hoverPos.top < boxPos.top + 4) {
          top -= hoverPos.top - (boxPos.top + 4);
        }
        /* Make sure the text isn't outside the right of the box. */
        if (hoverPos.left > boxPos.right - hoverPos.width - 26) {
          left -= hoverPos.left - (boxPos.right - hoverPos.width - 26);
        }
        /* Make sure the text isn't outside the left of the box. */
        if (hoverPos.left < boxPos.left + 4) {
          left -= hoverPos.left - boxPos.left - 4;
        }
        /* Update position. */
        element.css({ top: Math.round(top), left: Math.round(left) });
      }
    }
  } else {
    clearInterval(HTTIntervalID);
    HTTIntervalID = setInterval(UpdateHoverTipTxt, 300);
  }
};
/*  Waits for passage to be fully rendered before doing anything.  */
var HTTIntervalID = 0;
$(document).on(":passageend", function (ev) {
  UpdateHoverTipTxt();
});
$(window).on("resize scroll", function (ev) {
  clearInterval(HTTIntervalID);
  HTTIntervalID = setInterval(UpdateHoverTipTxt, 300);
});
$("#ui-bar-toggle").on("click", function (ev) {
  clearInterval(HTTIntervalID);
  HTTIntervalID = setInterval(UpdateHoverTipTxt, 300);
});
/* <<hovertip>> macro */
Macro.add("hovertip", {
  tags: null,
  handler: function () {
    if (this.args.length > 0) {
      var mw = "";
      if (this.args.length > 1 && !isNaN(parseInt(this.args[1], 10))) {
        mw = ' style="max-width: ' + parseInt(this.args[1], 10) + 'px;"';
      }
      if (State.temporary.HoverTipCount == undefined) {
        State.temporary.HoverTipCount = 1;
      } else {
        State.temporary.HoverTipCount++;
      }
      while ($("#hoverTip" + State.temporary.HoverTipCount).length) {
        /* Found an existing hoverTip. */
        State.temporary.HoverTipCount++;
      }
      var output =
        '<span id="hoverTip' +
        State.temporary.HoverTipCount +
        '" class="hoverTipTxt hoverTip" tabindex="0" ' +
        'onmouseenter="UpdateHoverTipTxt();">' +
        this.payload[0].contents +
        '<span id="hoverTipTxt' +
        State.temporary.HoverTipCount +
        '" class="hoverBox hoverTail"' +
        mw +
        ">" +
        this.args[0] +
        "</span></span>";
      $(this.output).wiki(output);
    } else {
      $(this.output).wiki(this.payload[0].contents);
    }
  },
});
/* hovertip v2.0 - End */
