function dwarfRollCall(dwarves) {

  var dwarvesString = "";
  for(let i=0; i < dwarves.length; i++){
    dwarvesString += i+1+". "+dwarves[i]+" ";

  }
  return dwarvesString
}

function summonCaptainPlanet(planeteerCalls){
<<<<<<< HEAD
  var planeteer = [];
  for(let i=0; i < planeteerCalls.length; i++){
    planeteer.push(planeteerCalls[i].toUpperCase() + "!")
  }
  return planeteer
=======
  
>>>>>>> cd530a30c5be235c6229097a92aaab26cd49a428
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
