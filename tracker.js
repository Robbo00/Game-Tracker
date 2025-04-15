function Reset(){
    New()
    populate() 
    score()
}
let scores = new Map()

let curr = localStorage.getItem("curr")

let great = 0

let games = localStorage.getItem("games").split(",")

let P1 = localStorage.getItem("P1")

let P2 = localStorage.getItem("P2")

let P3 = localStorage.getItem("P3")

let Vtracker = localStorage.getItem("Vtracker").split(",")

let Ktracker = localStorage.getItem("Ktracker").split(",")


let tracker = new Map()

let G1 = ""

let G2 = ""

let G3 = ""
let Vscores = Array.from(localStorage.getItem("Vscores"))



let gamo = [[games[0], 0], [games[1], 0], [games[2], 0], [games[3], 0], [games[4], 0], [games[5], 0]]
tracker.clear()

tracker.set(P1, [Vtracker[0], Vtracker[1], Vtracker[2]])

tracker.set(P2, [Vtracker[3], Vtracker[4], Vtracker[5]])

tracker.set(P3, [Vtracker[6], Vtracker[7], Vtracker[8]])

let rTracker = Array.from(tracker)


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


function populate(){


    for (let i = 0; i <= 3; i++) {
    if (i = 1){

    [G1, G2, G3] = testSame(G1, G2, G3) 
  tracker.set(P1, [G1, G2, G3])

    }

    if (i = 2){
    
    
    [G1, G2, G3] = testSame(G1, G2, G3) 
    tracker.set(P2, [G1, G2, G3])
    }

    if (i = 3){
    
    [G1, G2, G3] = testSame(G1, G2, G3) 
    testSame(G1, G2, G3)
    tracker.set(P3, [G1, G2, G3])
    }
    
}
console.log("apple")
localStorage.setItem("Ktracker", null)
localStorage.setItem("Vtracker", null)

localStorage.setItem("Vtracker", Array.from(tracker.values()))
// localStorage.setItem("Ktracker", Array.from(tracker.keys()))

console.table(localStorage.getItem("tracker"))
console.log(localStorage.getItem("tracker"))
popular()
}


function popular(){


for (let p of tracker.values()){
    // p = Array.from(p)
    console.log(p)
    for (let z = 0; z < gamo.length ;z++) {
        for (let i = 0; i < 3; i++) {
            if(gamo[z][0] == p[i]){
                gamo[z][1]++
            }
        }
        
    }
}
console.log(gamo)
for (let i = 0; i < gamo.length; i++) {
    if(gamo[i][1]>great){
        curr = i
        great = gamo[i][1]
    }
}
$(".MP").html("Most popular game is " + gamo[curr][0] + " played by (" + gamo[curr][1] + ") players")
localStorage.setItem("game", gamo[curr][0])
localStorage.setItem("num", gamo[curr][1])
}


function print(){
let con = [] 
con = Array.from(tracker)
let son = []
son = Array.from(scores)
$(".Phead1").html(P1)
$(".Phead2").html(P2)
$(".Phead3").html(P3)
console.log(con) 
$(".G11").html(con[0][1][0])
$(".G12").html(con[0][1][1])
$(".G13").html(con[0][1][2])
$(".G21").html(con[1][1][0])
$(".G22").html(con[1][1][1])
$(".G23").html(con[1][1][2])
$(".G31").html(con[2][1][0])
$(".G32").html(con[2][1][1])
$(".G33").html(con[2][1][2])

$(".S11").html(son[0][1][0])
$(".S12").html(son[0][1][1])
$(".S13").html(son[0][1][2])
$(".S21").html(son[1][1][0])
$(".S22").html(son[1][1][1])
$(".S23").html(son[1][1][2])
$(".S31").html(son[2][1][0])
$(".S32").html(son[2][1][1])
$(".S33").html(son[2][1][2])

$(".A1").html(Math.round((son[0][1][0] + son[0][1][1] + son[0][1][2]) / 3))
$(".A2").html(Math.round((son[1][1][0] + son[1][1][1] + son[1][1][2]) / 3))
$(".A3").html(Math.round((son[2][1][0] + son[2][1][1] + son[2][1][2]) / 3))

console.log(gamo)
$(".MP").html("Most popular game is " + localStorage.getItem("game") + " played by (" + localStorage.getItem("num") + ") players")
}

scores.set(P1, [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100, ), Math.floor(Math.random() * 100, )])
scores.set(P2, [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100, ), Math.floor(Math.random() * 100, )])
scores.set(P3, [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100, ), Math.floor(Math.random() * 100, )])


// console.log(localStorage.getItem("Ktracker"))
console.log(localStorage.getItem("Vtracker"))
console.table(tracker)
print()
console.log(Vscores)