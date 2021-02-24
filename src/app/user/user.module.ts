import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MatTableModule } from '@angular/material/table';
import { UserRoutingModule } from './user-routing.module'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    UserComponent,
    UserDialogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    UserRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
