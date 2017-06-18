import { Component } from '@angular/core';
import { UserService } from "app/users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  activeUsers :string[];
constructor(private userService:UserService){}
  ngOnInit()
  {
this.activeUsers=this.userService.activeUsers;}
  onSetToInactive(id: number) {
   this.userService.SetToInactive(id);
  }
}
