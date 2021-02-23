import { Injectable } from '@angular/core';
import { User } from './user/user.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://ng2020test-default-rtdb.firebaseio.com/users.json');
  }
}
