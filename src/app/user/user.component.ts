import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

export interface User {
  id?: number;
  name: string;
  dob: string;
  gender: string;
  action?: string;
}

const USER_DATA: User[] = [];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[] = ['select', 'name', 'dob', 'gender', 'action'];
  dataSource = new MatTableDataSource<User>(USER_DATA);
  selection = new SelectionModel<User>(true, []);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      if(Array.isArray(users)) {
        users.map((u: User, i:number) => {u.id = i;return u;});

        this.userService.users = [...users];
        this.dataSource = new MatTableDataSource<User>(users);
      } else {
        this.userService.users = [];
        this.dataSource = new MatTableDataSource<User>([]);
      }
    },(err) => {
      console.log("Error: ", err);
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  openDialog(action:string, obj?:User) {
    if(obj === undefined) {
      obj = {name:'', gender:'', dob:''};
    }
    obj.action = action;
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        if(result.event == 'Add'){
          this.addRowData(result.data);
        }else if(result.event == 'Update'){
          this.updateRowData(result.data);
        }else if(result.event == 'Delete'){
          this.deleteRowData(result.data);
        }
      }
    });
  }

  addRowData(row_obj:User){
    this.userService.addUser(row_obj).subscribe((users: User[]) => {
      this.getUsers();
    },(err) => {
      console.log("Error: ", err);
    });
  }
  updateRowData(row_obj:User){
    this.userService.updateUser(row_obj).subscribe((users: User[]) => {
      this.getUsers();
    },(err) => {
      console.log("Error: ", err);
    });
  }
  deleteRowData(row_obj:User){
    this.userService.deleteUser(row_obj).subscribe((users: User[]) => {
      this.getUsers();
    },(err) => {
      console.log("Error: ", err);
    });
  }

}
