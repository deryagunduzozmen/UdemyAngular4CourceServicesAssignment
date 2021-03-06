import { Injectable } from "@angular/core";
import { CounterService } from "app/counter.service";

@Injectable()
export class UserService {
   activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
constructor(private counterService:CounterService){}
  SetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.IncreaseinactiveToActiveCounter();
  }

  SetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
     this.counterService.IncreaseactiveToInactiveCounterCounter();
  }
}