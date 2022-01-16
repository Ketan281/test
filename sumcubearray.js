var numbers=[2, 3, 5, 7, 9]
var isDivBy3=function(el){
   return el%3===0
}
var nums1=numbers.filter(isDivBy3)
var cube=function(el){
    return el*el*el
}
var nums2=nums1.map(cube)
// console.log(nums2)
var sum=function(ac,el){
    return ac+el
}
var ans=nums2.reduce(sum)
console.log(ans)