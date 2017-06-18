export class CounterService{
    activeToInactiveCounter=0;
    inactiveToActiveCounter=0
    IncreaseactiveToInactiveCounterCounter()
    {
    this.activeToInactiveCounter++;
    console.log("activeToInactiveCounter:"+this.activeToInactiveCounter);
    }
    IncreaseinactiveToActiveCounter()
    {
    this.inactiveToActiveCounter++;
    console.log("inactiveToActiveCounter:"+this.inactiveToActiveCounter);
    }
}