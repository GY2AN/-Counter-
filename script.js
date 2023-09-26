let counterNumber = document.getElementById("counterValue");

function onDec(){
let preValue = counterNumber.textContent;
let currentValue = parseInt(preValue) - 1;
if(currentValue > 0){
    counterNumber.style.color="green"
}else if(currentValue<0){
    counterNumber.style.color ="red"
}else{
    counterNumber.style.color ="black";
}
counterNumber.textContent = currentValue;
}

function onInc(){
    let preValue = counterNumber.textContent;
    let currentValue = parseInt(preValue) + 1;
    if(currentValue > 0){
        counterNumber.style.color="green"
    }else if(currentValue<0){
        counterNumber.style.color ="red"
    }else{
        counterNumber.style.color ="black";
    }
    counterNumber.textContent = currentValue;
    }


function onReset(){
    counterNumber.textContent = 0;
    counterNumber.style.color = "black";
}