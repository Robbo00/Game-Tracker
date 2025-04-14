if(localStorage.getItem("fresh") == "yes"){
    New()
}
let available = [0, 1, 2, 3, 4, 5,]
    let deleted = []

let games = localStorage.getItem("games").split(",")
let P1 = localStorage.getItem("P1")
let P2 = localStorage.getItem("P2")
let P3 = localStorage.getItem("P3")
let tracker = new Map()
let G1 = ""
let G2 = ""
let G3 = ""
tracker.set(P1)
tracker.set(P2)
tracker.set(P3)

console.log("yes")
let num = 1
for (let i = 0; i <= 3; i++) {
    console.log("yes")
    if (num = 1){

    [G1, G2, G3] = testSame(G1, G2, G3) 
   
    console.log(G1 +" " +G2 + " "+ G3)
    tracker.set(P1, [G1, G2, G3])
    }

    if (num = 2){
    
    
    [G1, G2, G3] = testSame(G1, G2, G3) 
    console.log(G1 +" " +G2 + " "+ G3)
    tracker.set(P2, [G1, G2, G3])
    }

    if (num = 3){
    
    [G1, G2, G3] = testSame(G1, G2, G3) 
    testSame(G1, G2, G3)
    console.log(G1 +" " +G2 + " "+ G3)
    tracker.set(P3, [G1, G2, G3])
    }
    
    break
}
console.table(tracker)





    function testSame(v1,v2,v3){

    let available = [0, 1, 2, 3, 4, 5,]
    let newo = []
        while (available.length> 0) {
        let d = Math.floor(Math.random() * (available.length))
        let picked = available.splice(d, 1)[0]
            newo.push(picked)   
        }
    v1 = games[newo[0]]
    v2 = games[newo[1]]
    v3 = games[newo[2]]
    console.log(newo)
    return [v1, v2, v3]

    
}

function New(){
    localStorage.setItem("games", "")
    let games = [
    ]
    
    let w1 = prompt("pick the 1st game")
    testGame(w1)
    let w2 = prompt("pick the 2nd game")
    testGame(w2)
    let w3 = prompt("pick the 3rd game")
    testGame(w3)
    let w4 = prompt("pick the 4th game")
    testGame(w4)
    let w5 = prompt("pick the 5th game")
    testGame(w5)
    let w6 = prompt("pick the 6th game")
    testGame(w6)

    
    let P1 = prompt("Pick the 1st person")
    let P2 = prompt("Pick the 2nd person")
    let P3 = prompt("Pick the 3rd person")
    
    
    
    
    localStorage.setItem("fresh", "no")
    localStorage.setItem("games", games)
    localStorage.setItem("P1", P1)
    localStorage.setItem("P2", P2)
    localStorage.setItem("P3", P3)
}

function testGame(value){
    if(games.includes(value)){
    value = prompt("Oops, you already picked this game. Try again!")
    }
    else{
        games.push(value)
        return
    }
    testGame(value)
}