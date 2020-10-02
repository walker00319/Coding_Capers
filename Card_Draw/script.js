var currindex = 0
var path = "img/Cards/"
var ext = ".png"
var filelist = []
var cards = ["2","3","4","5","6","7","8","9","10","A","J","K","Q"]
var letter = ["C","D","H","S"]
for(var j=0;j<=12;j++ ){

for(var i=0;i<=3;i++){
var file = path + cards[j] +letter[i] + ext
console.log(file)
filelist.push(file)

}}

console.log(filelist)
var shuffledfiles = shuffle(filelist)
console.log(shuffledfiles)

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

function Draw(){
document.get
}