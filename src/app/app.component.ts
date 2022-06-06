import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aplikacja PZN';

  constructor(private accountSevice:AccountService)
  {

  }
  users: any;
  ngOnInit()
  {
    this.setCurrentUser();
  }

  setCurrentUser()
  {
    const user: any = JSON.parse(localStorage.getItem('user'));
    this.accountSevice.setCurrentUser(user);
  }
}
