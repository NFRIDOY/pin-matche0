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
digit4();