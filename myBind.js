Function.prototype.myBind = function(context){
    return () => {
        return this.apply(context)  // this in here is for the instance the myBind method called on
    }
}

// boundTurnOn = () => { this.apply(context) }
class Lamp {
    constructor() {
      this.name = "a pink lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();

  
  turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"
  