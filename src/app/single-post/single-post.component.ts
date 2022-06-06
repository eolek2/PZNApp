import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    })
  }
  post:any = { }
  id:any
  constructor(private http:HttpClient, private route:ActivatedRoute, private router:Router, private sanitizer:DomSanitizer) { }
  baseUrl = "https://api-pznapp.azurewebsites.net/api/";

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
    })
    this.loadPost();
  }

  loadPost()
  {
    this.http.get(this.baseUrl + 'Blog/' + this.id, this.httpOptions).subscribe(response =>
      {
        console.log(response);
        this.post = response;
      }, error =>
      {
        console.log(error.eroor);
      })
  }

  allNews()
  {
    this.router.navigateByUrl('/home');
  }

  otherPost(otherid:any)
  {
    this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/post/'+otherid);
    });
  }
}
