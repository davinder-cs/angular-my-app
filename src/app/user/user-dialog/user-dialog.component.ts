import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user.component';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})

export class UserDialogComponent implements OnInit {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  ngOnInit(): void {
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
