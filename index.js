//Dwarf Roll Call
var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
function dwarfRollCall(dwarves) {
var array =[];
   for (var i=0;i<dwarves.length;i++){
     array.push(`${i+1}. ${dwarves[i]} `);
   }
   return array.join("");
 }



//Summon Captain Planet
var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];
function summonCaptainPlanet(planeteerCalls){
 return planeteerCalls.map(a=>a.toUpperCase()+"!");
 }


// Long Planeteer Calls
function longPlaneteerCalls(words){
  for(var i=0;i<words.length;i++){
    if (words[i].length>4){
      return true;
    }
  }
  return false;
}
 
var words = ["wind", "fire"];
longPlaneteerCalls(words); 



//Find The Cheese
function findTheCheese (foods) {
  for(var i=0;i<foods.length;i++){
  if (foods[i]=="cheddar"
  ||foods[i]=="gouda"
  ||foods[i]=="camembert"
  ){
    return foods[i];
  }
}
return "no cheese!";
}



function wordsWithB (arrayOfWords){
  var newArray= [];
  for(var i=0;i<arrayOfWords.length;i++){
    if (arrayOfWords[i][0]=== "B"
    ){
     newArray.push (arrayOfWords[i]);
    }
  }
  return newArray
}


  //bob, sally, billy



