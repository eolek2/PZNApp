import { SinglePostComponent } from './../../single-post/single-post.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountService } from './../../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-preferrences',
  templateUrl: './user-preferrences.component.html',
  styleUrls: ['./user-preferrences.component.css']
})
export class UserPreferrencesComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    })
  }

  me:any;
  selectedModule:string = "data";
  constructor(private accountService:AccountService, private http:HttpClient) { }
  ngOnInit(): void
  {
    this.getMe();
  }

  baseUrl = "https://api-pznapp.azurewebsites.net/api/";

  getMe()
  {
     var user = JSON.parse(localStorage.getItem('user'));
     this.http.get(this.baseUrl + 'Users/' + user.id, this.httpOptions).subscribe(response =>
      {
        console.log(response);
        this.me = response;
      }, error =>
      {
        console.log(error.error);
      });
  }

  loadEditData()
  {
    this.selectedModule = 'data';
  }

  loadPosts()
  {
    this.selectedModule = 'posts'
  }

  changePassword()
  {
    this.selectedModule = 'changePassword'
  }
}
