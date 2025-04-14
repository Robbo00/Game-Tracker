if(localStorage.getItem("fresh") == "yes"){
    New()
}

let games = localStorage.getItem("games").split(",")
let P1 = localStorage.getItem("P1")
let P2 = localStorage.getItem("P2")
let P3 = localStorage.getItem("P3")
let tracker = new Map()
tracker.set(P1)
tracker.set(P2)
tracker.set(P3)

console.log("yes")

for (let i = 0; i <= 2; i++) {
    console.log("yes")
    let num = 1
    let G1 = games[Math.floor(Math.random() * 5)]
    let G2 = games[Math.floor(Math.random() * 5)]
    let G3 = games[Math.floor(Math.random() * 5)]
    
    console.log(G1 +" " +G2 + " "+ G3)
    testSame(G1, G2, G3)
    tracker.set(P1, [G1, G2, G3])
    break
}
console.table(tracker)
























    function testSame(v1,v2,v3){
    let done = "no"
    let available = [0, 1, 2, 3, 4, 5,]
    let deleted = []
    for ( done == "yes";;) {

        if(v1 == v2 || v1 == v3){
            delete available[v1]
            v1= Math.floor(Math.random() * available.length)
        }
        

        if(v2 == v1 || v1 == v3 || deleted){
            delete available[v2]
            v2= Math.floor(Math.random() * available.length)
        }
        

        if(v3 == v2 || v3 == v3 || deleted.includes(v3) == true){
            delete available[v3]
            v3= Math.floor(Math.random() * available.length)
        }
        if(v1 != v2 && v1 != v3 && v2 != v1 && v2 != v3 && v3 != v1 && v3 != v2){
            break
        }
        testSame(v1,v2,v3)
    }
    
}


function New(){
    let games = [
        prompt("pick the 1st game"), 
        prompt("pick the 2nd game"), 
        prompt("Pick the 3rd game"), 
        prompt("pick the 4th game"), 
        prompt("Pick the 5th game"), 
        prompt("Pick the 6th game"),
    ]
    console.log(games[0])
    let P1 = prompt("Pick the 1st person")
    let P2 = prompt("Pick the 2nd person")
    let P3 = prompt("Pick the 3rd person")
    
    
    
    
    localStorage.setItem("fresh", "no")
    localStorage.setItem("games", games)
    localStorage.setItem("P1", P1)
    localStorage.setItem("P2", P2)
    localStorage.setItem("P3", P3)
}