import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public get() : Promise<User[]>{
    return this.http.get<User[]>(`${this.uri}/users`).toPromise();
  }

  public create(payload: User): Promise<User> {
    return this.http.post<User>(`${this.uri}/users`, payload).toPromise();
  }

  public update(payload: User): Promise<User> {
    return this.http.put<User>(`${this.uri}/users/${payload._id}`, payload).toPromise();
  }

  public delete(id: number): Promise<User> {
    return this.http.delete<User>(`${this.uri}/users/${id}`).toPromise();
  }

  public getById(id: number): Promise<User> {
    return this.http.get<User>(`${this.uri}/users/${id}`).toPromise();
  }
}