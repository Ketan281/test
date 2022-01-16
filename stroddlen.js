var array = [ "abc", "de","cdefg"];

var strlen = array.map(function(el) {
 if(el.length%2==1){
     return el.length
 }
 else{
     return 0
 }
});
var add=function(ac,el){
    return ac+el
}
var ans=strlen.reduce(add)
console.log(ans)