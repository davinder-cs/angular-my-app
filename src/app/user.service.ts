import { Injectable } from '@angular/core';
import { User } from './user/user.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const config = {
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    }
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  users: User[] = [];

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://ng2020test-default-rtdb.firebaseio.com/users.json');
  }

  updateUser(data: User): Observable<User[]> {
    delete data.action;
    return this.httpClient.put<User[]>('https://ng2020test-default-rtdb.firebaseio.com/users/'+data.id+'.json', data, config);
  }

  deleteUser(data: User): Observable<User[]> {
    if(data.id)
      delete this.users[data.id];
    if(this.users.length == 1) {
      return this.httpClient.delete<User[]>('https://ng2020test-default-rtdb.firebaseio.com/users.json', config);
    } else {
      return this.httpClient.put<User[]>('https://ng2020test-default-rtdb.firebaseio.com/users.json', this.users, config);
    }
  }

  addUser(data: User): Observable<User[]> {
    delete data.action;
    this.users.push(data);
    return this.httpClient.put<User[]>('https://ng2020test-default-rtdb.firebaseio.com/users.json', this.users, config);
  }
}
