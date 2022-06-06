import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-user-change-pasword',
  templateUrl: './user-change-pasword.component.html',
  styleUrls: ['./user-change-pasword.component.css']
})
export class UserChangePaswordComponent implements OnInit {

  model:any = {}
  constructor(private toastr: ToastrService,private accountService:AccountService, private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    })
  }
  baseUrl = "https://api-pznapp.azurewebsites.net/api/";
  ngOnInit(): void {
  }

  changePassword()
  {
    var user = JSON.parse(localStorage.getItem('user'));
    var options = this.httpOptions;
    this.http.patch(this.baseUrl + 'Users/'+ user.id + '/ChangePassword', this.model, options).subscribe(response =>
      {
        this.toastr.info("Hasło zostało zmienione");
      }, error =>
      {
        console.log(error);
        console.log(error.eroor);
        this.toastr.error("Wystąpił problem w trakcie zmiany hasła.");
      })
  }
}
