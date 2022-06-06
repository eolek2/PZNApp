import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ThrowStmt } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any = {};
  constructor(public accountService:AccountService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.accountService.login(this.model).subscribe(response =>
      {
        console.log(response);
        this.router.navigateByUrl('/home');
      }, error=>
      {
        console.log(error);
        this.toastr.error(error.error);
      });
  }

  logout()
  {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  me()
  {
    var user = JSON.parse(localStorage.getItem('user'));
    this.router.navigateByUrl('/users/'+user.id);
  }

  loggedIn()
  {
    return this.accountService.loggedIn();
  }
}
