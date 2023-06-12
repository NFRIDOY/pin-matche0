let rn;
function digit4() {
    rn = Math.ceil(Math.random() * 9999);
    // rn > 0 ? 
    if (rn > 0) {
        if (rn / 1000 >= 1 && rn/1000 <= 9.999) {
            console.log(rn);
            return rn;
        }
    }
    else {
        return rn;
        digit4();
    }
}
// digit4();
let GeneratedPinValue, digitsValue;
function GeneratePin() {
    GeneratedPin = document.getElementById("GeneratedPin");
    // GeneratedPin.value = 0;
    GeneratedPin.value = digit4();
    GeneratedPinValue = GeneratedPin.value;
    // console.log("GeneratedPinValue : "+GeneratedPinValue);
}

// let digitBtn = document.getElementsByClassName("button");
let digits = document.getElementById("digits");
function digitInput(digit) {
    document.getElementById(digit).addEventListener("click", function () {
        console.log("cliked " + digit);
        digits.value = digits.value + parseInt(digit);
    });
    digitsValue = digits.value;
    console.log(digitsValue);
}

function matchBtn() {
    if (GeneratedPinValue === digitsValue) {
        console.log("Match");
        document.getElementById("ok").style.display = "block"
    }
}