var words = ["ground", "control", "to", "major", "tom"];

function map(data, callback){
var newArray = [];
for (var i = 0; i<data.length; i++){ 
    newArray.push(callback(data[i]))  //this will call function(word){...}
}
return newArray;
}
var example1 =  map(words, function(word) {
  return word.length; // this is a callback
});
console.log(example1)

/*
no need to repeat below cuz this has been coded
function map2(data, callback){
    var upperCase = [];
    for (var i = 0; i<data.length; i++){
        upperCase.toUpperCase(callback(data[i]))
    }
    return upperCase;
}
*/
var example2 = map(words, function(word) {
  return word.toUpperCase();
});
console.log (example2)


var example3 = map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log (example3)










/*function indexArray(word, callback) {
    var newArray = [];
    for (var i = word.length -1; i >= 0 ; i--){
        newArray.push(callback(array[i],i));
    }
    return newArray;
}
console.log ()

})


map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
}); 
//[6, 7, 2, 5, 3]

//[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

//[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]*/