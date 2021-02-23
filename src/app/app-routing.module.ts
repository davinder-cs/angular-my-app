import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyComponent
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then(
        (m) => m.UserModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
