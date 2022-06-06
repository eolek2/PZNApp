import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-posts-edit',
  templateUrl: './user-posts-edit.component.html',
  styleUrls: ['./user-posts-edit.component.css']
})
export class UserPostsEditComponent implements OnInit {

  public Editor = ClassicEditor;

  @Output() cancelPostEditing = new EventEmitter();
  @Output() successPostEditing = new EventEmitter();
  @Input() postId:any;

  model:any = {};
  constructor(private http:HttpClient, private toastr:ToastrService) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    })
  }

  baseUrl = "https://api-pznapp.azurewebsites.net/api/";

  ngOnInit(): void {
  }

  loadPostData()
  {
    var options = this.httpOptions;
    this.http.get(this.baseUrl + 'Blog/' + this.postId, options).subscribe(response =>
      {
        this.model = response;
      }, error =>
      {
        console.log(error);
        console.log(error.eroor);
      })
  }

  editPost()
  {
    console.log(this.postId);
  }

  cancelPost()
  {
    this.cancelPostEditing.emit(true);
  }

}
