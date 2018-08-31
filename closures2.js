
var countdownGenerator = function (x) {
    var y = x;
    /* your code here */
    return function() {
        
    if (y > 0){
    console.log("T-minus" + y)
    }
    else if (y < 0){
        console.log("Rockets already gone, bub!")
    }
    else {
        console.log ("Blast Off!")
    }
    y--;

}
  };
  
  
  var countdown = countdownGenerator(3);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!