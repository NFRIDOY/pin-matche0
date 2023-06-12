let rn;
function digit4() {
    rn = Math.round(Math.random()*9999);
    if(rn/1000 >= 1) {
        console.log(rn);
        return rn;
    }
    else {
        digit4();
    }
}
// digit4();
let GeneratedPinValue,digitsValue;
function GeneratePin() {
    GeneratedPin = document.getElementById("GeneratedPin");
    GeneratedPin.value = "";
    GeneratedPin.value = digit4();
    GeneratedPinValue = GeneratedPin.value;
    console.log(GeneratedPinValue);
}

// let digitBtn = document.getElementsByClassName("button");
let digits = document.getElementById("digits");
function digitInput(digit) {
    document.getElementById(digit).addEventListener("click", function() {
        console.log("cliked " + digit);
        digits.value = digits.value + parseInt(digit);
    });
    digitsValue = digits.value;
    console.log(digitsValue);
}

function matchBtn() {
    if(GeneratedPinValue === digitsValue) {
        console.log("Match");
        document.getElementById("ok").style.display = "block"
    }
}