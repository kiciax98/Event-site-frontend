import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // public users!: User[];
  // private userService: UserService
  constructor() { }

  ngOnInit() {
      // this.getUsers();
  }

  // public getUsers(): void {
  //   this.userService.getUsers().subscribe(
  //     (response:any) => {
  //       this.users = response;
  //       console.log(response);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   )
  // }

}
