import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-posts-list',
  templateUrl: './user-posts-list.component.html',
  styleUrls: ['./user-posts-list.component.css']
})
export class UserPostsListComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    })
  }


  posts:any = { };
  @Output() editPostId = new EventEmitter();

  constructor(private http:HttpClient, private router:Router, private toastr:ToastrService) { }

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
        this.toastr.error("Wystąpił problem z usunięciem postu.");
      })
  }

  deletePost(id:any)
  {
    var options = this.httpOptions;
    this.http.delete(this.baseUrl + 'Blog/' + id, options).subscribe(response =>
      {
        console.log(response);
        this.toastr.info("Post został usunięty");
        this.loadPosts();
      }, error =>
      {
        console.log(error.eroor);
        this.toastr.error("Wystąpił problem z usunięciem postu.");
      })
  }

  editPost(id:any)
  {
    this.editPostId.emit(id);
  }

  hasPosts()
  {
    if(this.posts == null)
      return false;

      console.log(this.posts.length > 0)

    return (this.posts.length > 0);
  }
}
