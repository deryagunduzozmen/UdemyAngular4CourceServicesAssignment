import { Component} from '@angular/core';
import { UserService } from "app/users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
    inactiveUsers:string[];
  constructor(private userService:UserService){}
ngOnInit()
  {
this.inactiveUsers=this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
 this.userService.SetToActive(id);
  }
}
