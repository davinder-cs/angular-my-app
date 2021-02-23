import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

export interface User {
  name: string;
  dob: string;
  gender: string;
}

const USER_DATA: User[] = [];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  displayedColumns: string[] = ['name', 'dob', 'gender'];
  dataSource = USER_DATA;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.dataSource = users;
    },(err) => {
      console.log("Error: ", err);
    });
  }

}
