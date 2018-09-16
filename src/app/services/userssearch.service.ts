import { User } from './../user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserssearchService {

  constructor(private http:HttpClient) { }

  getUser(name:string) : Observable <User> {
    const url = `https://api.github.com/users/${name}`;
    return this.http.get <User> (url);
  }
}
