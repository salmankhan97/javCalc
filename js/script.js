// meter to feet
function meterTofeet(value1){
    console.log(typeof(value1));
    document.getElementById("result1").innerHTML = value1 * 0.08333;
}

//feet to mile
function feetTomile(value2){
    document.getElementById("result2").innerHTML =  value2 * 0.000189394;
}

//wood calculator

var chair = 0;
var table = 0;
var bed = 0;

function chairCount(value){
    if(isNaN(value)){
        chair = 0;
    }
    else{
        chair = value;
    }
}
function bedCount(value){
    
    if(isNaN(value)){
        bed = 0;
    }
    else{
        bed = value * 5;
    }
    
}
function tableCount(value){
    if(isNaN(value)){
        table = 0;
    }
    else{
        table = value * 3;
    }
    
}
function woodCalc(chairs){
    document.getElementById("woodCalc").innerHTML = chair + bed +table;
}


//brick calculator
function brickCalc(floorCount){
    if (floorCount == 0){
        document.getElementById("brickresult").innerHTML = "Buldings can't have 0 floors";
    }
    else if(floorCount <= 10){
        document.getElementById("brickresult").innerHTML =  floorCount * 15 * 1000;
    }
    else if(floorCount <= 20){
        document.getElementById("brickresult").innerHTML =  (10 * 15 + (floorCount - 10) * 12) * 1000;
    }
    else if(floorCount <= 30){
        document.getElementById("brickresult").innerHTML =  (10 * 15 + 10 * 12 + (floorCount - 20) * 10) * 1000;
    }

}


//short name
var nameArr;
function getNames(value){
    nameArr = value.split(/\s*,\s*/);
}

function shortName(){

    var shortName = nameArr[0];
    for(var i=0;i<nameArr.length;i++){
        document.getElementById("namesShow").innerHTML = nameArr;

        if(shortName.length > nameArr[i].length){
            shortName = nameArr[i];
        }

    }
    document.getElementById("shortname").innerHTML = shortName;

}
