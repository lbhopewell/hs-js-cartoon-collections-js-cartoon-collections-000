function dwarfRollCall(dwarves) {

  var dwarvesString = "";
  for(let i=0; i < dwarves.length; i++){
    dwarvesString += i+1+". "+dwarves[i]+" ";

  }
  return dwarvesString
}

function summonCaptainPlanet(planeteerCalls){

  var planeteer = [];
  for(let i=0; i < planeteerCalls.length; i++){
    planeteer.push(planeteerCalls[i].toUpperCase() + "!")
  }
  return planeteer
  
}

function longPlaneteerCalls(words) {
  for(let i=0; i < words.length; i++){
    if(words[i].length > 4){
      return true
    } else
    return false
  }
}

function findTheCheese (foods) {
  for (let i=0; i < foods.length; i++){
    if(foods[i] === "cheddar") return "cheddar";
    if(foods[i] === "gouda") return "gouda";
    if(foods[i] === "camembert") return "camembert";
  }
  return "no cheese!"
}

function wordsWithB(words) {
  var newArray = [];
  for (let i = 0; i , words.length; i++){
    if(words[i][0] === 'b'){
      newArray.push(words[i])
    }
  return newArray
  }
}
