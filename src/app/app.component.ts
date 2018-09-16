import { UserssearchService } from './services/userssearch.service';
import { User } from './user.model';
import { Component } from '@angular/core';
import {filter, switchMap, debounceTime, catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-ui';
  error: boolean = false;
  user: User = null;

  constructor (private userservice: UserssearchService) {}

  onSearch(searchvalue){

    this.userservice.getUser (searchvalue) .pipe (
      catchError (err => {
        this.user = null;
        this.error = true;
        return EMPTY;
      })
    )
    .subscribe (user => {
      this.user = user;
      this.error = false;
    });
    console.log(searchvalue);
  }

}
