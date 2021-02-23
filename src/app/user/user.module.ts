import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { MatTableModule } from '@angular/material/table';
import { UserRoutingModule } from './user-routing.module'



@NgModule({
  declarations: [
    UserComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    UserRoutingModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
