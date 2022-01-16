var array = ["ketan_mohite", "ketanmohite", "shivmangal_home_pune"];

var ans = array.filter(function (el) {
    return el.includes("_")
})

console.log(ans);