// alivia blount
// WDI GA week 1
// Wednesday: Objects

function Monkey(name, species, foodsEaten){
  this.name = name;
  this.species = species;
  this.foodsEaten = foodsEaten;

  var eatSomething = function(food){
    console.log("Im eating " + food + ". Yum Yum Yum!")
  };

  var introduce = function(){
    console.log("Hi my name is " + name );
    console.log("I am of the type " + species);
    console.log("I eat" + foodsEaten);
  }
}

var MickeyRed = new Monkey(MickeyRed, monkey, ["lettuce","carrots","peanuts"])
var JennyBlue = new Monkey(JennyBlue, monkey, ["lettuce","carrots","peanuts"])
var PinkeyOrange = new Monkey(PinkeyOrange, monkey, ["lettuce","carrots","peanuts"])
