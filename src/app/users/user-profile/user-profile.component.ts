import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:any = {};
  id:any;
  constructor(private http:HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
    })
    this.loadUser();
  }

  baseUrl = "https://api-pznapp.azurewebsites.net/api/";
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    })
  }

  loadUser()
  {
    this.http.get(this.baseUrl + 'Users/' + this.id, this.httpOptions).subscribe(response =>
      {
        console.log(response);
        this.user = response;
      }, error =>
      {
        console.log(error.eroor);
      })
  }
}
