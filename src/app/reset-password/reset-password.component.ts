import { HttpClient } from '@angular/common/http';
import { Router, RouteReuseStrategy } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  model:any = {};

  constructor(private router:Router, private toastr:ToastrService, private http:HttpClient) { }

  ngOnInit(): void {
  }
  baseUrl = "https://api-pznapp.azurewebsites.net/api/";
  resetPassword()
  {
    this.http.post(this.baseUrl + 'Users/ResetPassword', this.model).subscribe(response =>
      {
        this.toastr.info("Nowe hasło zostało wysłane na twój adres E-mail");
      }, error =>
      {
        console.log(error);
        console.log(error.eroor);
        this.toastr.error("Wystąpił problem w trakcie resetowania hasła.");
      })
  }

  cancel()
  {
    this.router.navigateByUrl("/");
  }
}
