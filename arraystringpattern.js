var array = ["abcd","cdea","cdf","edca"];
function firstAndLast(el){
  if (el[0]==="a"||el[el.length-1]==="a"){
      return el
  }
}
var newArr=array.filter(firstAndLast)
console.log(newArr)