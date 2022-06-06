import { AccountService } from './../_services/account.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-loggedin',
  templateUrl: './home-loggedin.component.html',
  styleUrls: ['./home-loggedin.component.css']
})
export class HomeLoggedinComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    })
  }

  posts:any = { };
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  baseUrl = "https://api-pznapp.azurewebsites.net/api/";

  loadPosts()
  {
    this.http.get(this.baseUrl + 'Blog', this.httpOptions).subscribe(response =>
      {
        console.log(response);
        this.posts = response;
      }, error =>
      {
        console.log(error.eroor);
      })
  }

  readMore(id:any)
  {
    this.router.navigateByUrl('/post/'+id);
  }

}
