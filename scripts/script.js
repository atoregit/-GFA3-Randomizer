var num1 = Math.floor((Math.random() * 20) + 1);
var num2 = Math.floor((Math.random() * 20) + 1);
var num3 = Math.floor((Math.random() * 20) + 1);
document.getElementById("tv").innerHTML = num1;
document.getElementById("mus").innerHTML = num2;
document.getElementById("gam").innerHTML = num3;


var largestNumber = Math.max(num1, num2, num3);

if (largestNumber == num1) {
    document.getElementById("max").innerHTML = "The media that was preferred by the most people were TV Series. (" + num1 + " people)";
} else if (largestNumber == num2) {
    document.getElementById("max").innerHTML = "The media that was preferred by the most people was Music. (" + num2 + " people)";
} else {
    document.getElementById("max").innerHTML = "The media that was preferred by the most people was Gaming. (" + num3 + " people)";
}

var letter = String.fromCharCode(num1 + 96);
document.getElementById("let").innerHTML = "The most common starting letter from the respondents is " +  letter;


var mins = num2*num3;
var hours = Math.floor(mins/60) + " hours"
var mins2 = (mins%60) + " minutes"
document.getElementById("time").innerHTML = "The average time the respondents spend consuming these media per day: " + hours + " and " + mins2;
