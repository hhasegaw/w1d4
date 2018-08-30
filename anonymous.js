/* var numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
var evens = numbers.filter(function(num) {
  return (num % 2 == 0);
});
console.log("Subset of even numbers:", evens); */

var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
  ];
  var result  = input.map(function(item){
      //z = sqr (x*x + y*y )
      return (Math.sqrt((item.x * item.x) + (item.y * item.y)));
  })
  console.log (result);
  console.log(result[0] === 5);
  console.log(result[1] === 13);
  console.log(result[2] === 17);