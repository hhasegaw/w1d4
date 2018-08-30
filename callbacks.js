/* var myFn = function() {
    console.log("I am function.");
  }
  
  myFn.someAttribute = 42;
  console.log(myFn.someAttribute);
  
  function runner(f) {
    f();
  }
  
  runner(myFn); */

  // The second argument/parameter is expected to be a function

  function findWaldo(arr, found) {
    //task1
    //for (var i = 0; i < arr.length; i++) 
    arr.forEach(function(name,i){
      if (name === "Waldo") {
        found(arr, i);   // execute callback
      }
    })
}
  
  
  function actionWhenFound(arr, i) {
    console.log (`Found ${arr[i]} at index ${i}`);
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);