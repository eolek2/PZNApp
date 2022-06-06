import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-user-edit-data',
  templateUrl: './user-edit-data.component.html',
  styleUrls: ['./user-edit-data.component.css']
})
export class UserEditDataComponent implements OnInit {

  model:any = {};
  constructor(private toastr:ToastrService,private accountService:AccountService, private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    })
  }

  ngOnInit(): void {
    this.getMe();
  }

  baseUrl = "https://api-pznapp.azurewebsites.net/api/";

  editData()
  {
    var user = JSON.parse(localStorage.getItem('user'));
    var options = this.httpOptions;
    this.http.put(this.baseUrl + 'Users/'+ user.id, this.model, options).subscribe(response =>
      {
        this.toastr.info("Dane zostały zaktualizowane");
      }, error =>
      {
        console.log(error);
        console.log(error.eroor);
        this.toastr.error("Wystąpił problem w trakcie aktualizacji danych.");
      })
  }

  getMe()
  {
     var user = JSON.parse(localStorage.getItem('user'));
     this.http.get(this.baseUrl + 'Users/' + user.id, this.httpOptions).subscribe(response =>
      {
        this.model = response;
      }, error =>
      {
        console.log(error.error);
      });
  }

}
