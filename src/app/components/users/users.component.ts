import { User } from './../../user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
