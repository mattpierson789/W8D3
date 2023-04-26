class Clock{
 

    constructor(){
        
      this.date = new Date();
      this.hours = this.date.getHours();
      this.minutes = this.date.getMinutes();
      this.seconds = this.date.getSeconds();


    //   this.printTime()
      setInterval(this._tick.bind(this),1000)
    }
 

    printTime(){
        
    const time = (`Time is ${this.hours}:${this.minutes}:${this.seconds}`)
    console.log(time)
    }

   _tick(){
        this.incrementSeconds()
        this.printTime()

    }

    incrementSeconds(){
        this.seconds++
        if (this.seconds == 60){
            this.incrementMinutes()
            this.seconds = 1}
    }

    incrementMinutes(){
        this.minutes++
        if (this.minutes == 60){
           this.incrementHours()
            this.minutes = 0}
    }

    incrementHours(){
        this.hours++
        if (this.hours == 24){
            this.hours = 0}
    }
}


const clock = new Clock
// console.log(clock)
