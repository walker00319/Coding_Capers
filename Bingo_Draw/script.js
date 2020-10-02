var announce = false
console.log("This software should not be used for anything other than fun!")
console.log("Script Sarted");
console.log("Bingo Tracker By Walker Dick!");

var AutoDrawBool = false
var currindex = 0
var barray = [];
var drawn = [];
var i = 1
while (i <= 75) {
    if (i <= 15) {
        barray.push("B" + i);
    }
    else if (i > 15 && i <= 30) {
        barray.push("I" + i);
    }
    else if (i > 30 && i <= 45) {
        barray.push("N" + i);
    }
    else if (i > 45 && i <= 60) {
        barray.push("G" + i);
    }
    else if (i > 60 && i <= 75) {
        barray.push("O" + i);
    }
    i++;

}
shuffle(barray)

function draw() {
    //console.log(currindex + " of " + (barray.length - 1))
    var drawNum = barray[currindex]
    if (announce) {
        var msg = new SpeechSynthesisUtterance(drawNum)
        window.speechSynthesis.speak(msg)
    }

    document.getElementById("DrawHist").innerText += drawNum + "\n"

    if (currindex <= barray.length - 1) {
        togglecheck(drawNum)
        currindex++;
    }
    else {
        stopAutoDraw()
        window.alert("All numbers have been drawn! Please refresh the page to start over")
    }
    document.getElementById("CountDrawn").innerText = currindex
}

function togglecheck(num) {
    drawn.push(num)
    var val = num.toUpperCase()
    document.getElementById(val).classList.toggle("checked");

}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// New Game Code
function newG(bool) {
    if (bool = true) {
        if (announce) {
            var Str1 = "We have a bingo! Please clear your cards to start a new game!"
            var msg = new SpeechSynthesisUtterance(Str1)
            window.speechSynthesis.speak(msg)
        }
        console.log("New Game Loaded")
        location.reload()
    } else {
        if (announce) {
            var Str2 = "Not a valid Bingo! Please do not clear your cards! We will start from where we left off!"
            var msg = new SpeechSynthesisUtterance(Str2)
            window.speechSynthesis.speak(msg)
        }
    }
}

// Function Called to start the new game process.
function newGame() {
    var txt;
    if (confirm("Are you sure you want to start a new game?")) {
        newG(true);
    } else {
        newG(false);
    }

}
function ChangeSpeech() {
    if (announce == false) {
        console.log("Number announcement is now OFF!")
        announce = true
        document.getElementById("speech").innerText = "Turn Speech OFF"
    }
    else {
        console.log("Number announcement is now OFF!")
        announce = false
        document.getElementById("speech").innerText = "Turn Speech on"

    }
}
function setAutoDraw() {
    if (AutoDrawBool == false) {
        AutoDrawBool = true
        document.getElementById("start_interval_draw").innerText = "Stop"
        startAutoDraw(Interval())
    } else {
        AutoDrawBool = false
        document.getElementById("start_interval_draw").innerText = "Start"
        stopAutoDraw()
    }


}
function Interval() {
    if (document.getElementById("num").value >= 0) {
        var time_delay = document.getElementById("num").value * 1000
        console.log(time_delay)
        return time_delay
    } else {
        alert("Plase put a positive value!")
    }

}
var TimeoutID  = 0
function startAutoDraw(time) {
    TimeoutID = setInterval(draw, time)

    console.log("Auto draw enabled!\n" + " Delay: " + (time / 1000) + "\n" + "ID: " + TimeoutID)

}
function stopAutoDraw() {
    StopInterval(TimeoutID)


}
function StopInterval(ID){
    clearInterval(ID)
    console.log("Auto draw cancelled\n" + 'ID: ' + TimeoutID)
}



