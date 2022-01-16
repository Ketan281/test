var number=[2, 3, 5, 7, 9]
var isDivBy3=function(el){
   return el%3===0
}
var nums1=number.filter(isDivBy3)
console.log(nums1)