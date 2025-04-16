// kicks off the functions to make a whole new tracker
function Reset(){
    New()
    populate() 
}
// makes eveyr variable that will be used
let scores, curr, great, games, P1, P2, P3, Vtracker, Ktracker, gamo, G1, G2, G3, tracker;

// puts random stuff into the local storage so it can be completely painted over later
function start(){
    //add 3 premade users
    //initialze variables
games = ["li", "bi", "cci", "di", "ew", "qw"]
curr = 0
great = 0
tracker = new Map()
tracker.set("blank", ["blank", "blank", "blank"])
tracker.set("lank", ["lank", "lank", "lank"])
tracker.set("ank", ["ank", "k", "b"])
scores = new Map()
scores.set(P1, [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100, ), Math.floor(Math.random() * 100, )])
scores.set(P2, [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100, ), Math.floor(Math.random() * 100, )])
scores.set(P3, [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100, ), Math.floor(Math.random() * 100, )])
localStorage.setItem("Vtracker", Array.from(tracker.values()))
gamo = [[games[0], 0], [games[1], 0], [games[2], 0], [games[3], 0], [games[4], 0], [games[5], 0]]
localStorage.setItem("game", gamo[curr][0])
localStorage.setItem("num", gamo[curr][1])
localStorage.setItem("Vscores", scores.values)
localStorage.setItem("games", games)
localStorage.set("Ktracker", tracker.keys())
New()
}

// detects if its their first time openeing wbesite and call start to make sure verything goes smoothly
try{
    localStorage.getItem("Ktracker").split(",")} 
    catch(err){
     start()
}
   
// Sets vairbales that will be usde to build the page to the according informaiton
scores = new Map()

curr = localStorage.getItem("curr")

great = 0

games = localStorage.getItem("games").split(",")
// have to use splice right here or there will be a blank field in the games array making some game slots turn up empty
games.splice(0,1)

P1 = localStorage.getItem("P1")

P2 = localStorage.getItem("P2")

P3 = localStorage.getItem("P3")

Vtracker = localStorage.getItem("Vtracker").split(",")

Ktracker = localStorage.getItem("Ktracker").split(",")


 tracker = new Map()

G1 = ""

G2 = ""

 G3 = ""
let Vscores = Array.from(localStorage.getItem("Vscores"))



 gamo = [[games[0], 0], [games[1], 0], [games[2], 0], [games[3], 0], [games[4], 0], [games[5], 0]]
tracker.clear()
// rebuilds the tracker map from local storage
tracker.set(P1, [Vtracker[0], Vtracker[1], Vtracker[2]])

tracker.set(P2, [Vtracker[3], Vtracker[4], Vtracker[5]])

tracker.set(P3, [Vtracker[6], Vtracker[7], Vtracker[8]])

let rTracker = Array.from(tracker)


    function testSame(v1,v2,v3){
        // uses splice and psuh to shuffle games therefore making the games each person has random and making sure its not the same vlue
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
// Gets INformatioin from the user to build the site
function New(){
    localStorage.removeItem("games")
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
    //let new_user = Prompts
    //prompt for user name and scores
    //use username the set local storage id
    
    localStorage.setItem("fresh", "no")
    localStorage.setItem("games", games)
    localStorage.setItem("P1", P1)
    localStorage.setItem("P2", P2)
    localStorage.setItem("P3", P3)
}
// makes sure you dont put in duplicate games
function testGame(value){
    if(games.includes(value) || value == ""){
    value = prompt("Oops, you already picked this game. Try again!")
    }
    else{
        games.push(value)
        return
    }
    testGame(value)
}

// uses a for loop and the previous test same function to get each eprsons set of games
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
localStorage.setItem("Ktracker", null)
localStorage.setItem("Vtracker", null)

localStorage.setItem("Vtracker", Array.from(tracker.values()))
// localStorage.setItem("Ktracker", Array.from(tracker.keys()))

popular()
}

// uses for loops and arrays to traverse the map and determine the count of each value to then be put into a vairbale
function popular(){
    gamo = [[games[0], 0], [games[1], 0], [games[2], 0], [games[3], 0], [games[4], 0], [games[5], 0]]

for (let p of tracker.values()){
    // p = Array.from(p)
    for (let z = 0; z < gamo.length ;z++) {
        for (let i = 0; i < 3; i++) {
            if(gamo[z][0] == p[i]){
                gamo[z][1]++
            }
        }
        
    }
}
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

// Builds HTML page after all the information from the functions abovehas been accumulated 
function print(){
let con = [] 
con = Array.from(tracker)
let son = []
son = Array.from(scores)
$(".Phead1").html(P1)
$(".Phead2").html(P2)
$(".Phead3").html(P3)
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

$(".MP").html("Most popular game is " + localStorage.getItem("game") + " played by (" + localStorage.getItem("num") + ") players")
}

scores.set(P1, [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100, ), Math.floor(Math.random() * 100, )])
scores.set(P2, [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100, ), Math.floor(Math.random() * 100, )])
scores.set(P3, [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100, ), Math.floor(Math.random() * 100, )])


print()
