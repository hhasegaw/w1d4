/* /* // read eval print loopp
// var arrayNumbers = [1,2,3,4;] prints exactly the same
// var objectOfCats {cat: {name:"cat"}}
// 
var arrayOfNumber = [1,2,3]
let beForEach = function (array, callback){
    for (var i=0; i < array.length;i++){
        callback(array[i]);
    }
}
//beForEach (arrayOfNumber, console.log("hello"));

var printToScreen = function (number){
    console.log (`your num is ${number}`);
    return "hello world"
}

beForEach (arrayOfNumber, printToScreen); // run value of the funtion not result of the func empty () will emboke
// document brawser
function Fprosser(sitem, callbackc){
if ()
}; */ 

function reverseArray (array, callback){
for (var i >= 0; i = array.length -1; i--){
var newArray = [];
newArray.push(printToScreen(array[i])
}
return newArray;
}

function multi (number) {
    return number*2;
}
function add3Divide2 (number){
    return (number+3)/2
}

}

console.log (reverseArray([1,2,3,4]))
console.log (multi([1,2,3,4]))

function reverseArray (array, callback){
    for (var i >= 0; i = array.length -1; i--){
    var newArray = [];
    newArray.push(printToScreen(array[i], i))
    }
    return newArray;
    }
    
    function multi (number, index) {
        console.log (`num at index ${index} is ${number}`)
        return number*2;
    }
    function add3Divide2 (number, index){
        console.log (`num at index ${index} is ${number}`)
        return (number+3)/2
    }
    
    }
    console.log (reverseArray([1,2,3,4]))
    console.log (multi([1,2,3,4])) */

