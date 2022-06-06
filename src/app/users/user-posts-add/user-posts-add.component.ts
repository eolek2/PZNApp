import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-user-posts-add',
  templateUrl: './user-posts-add.component.html',
  styleUrls: ['./user-posts-add.component.css']
})
export class UserPostsAddComponent implements OnInit {
  public Editor = ClassicEditor;

  @Output() cancelPostAdding = new EventEmitter();
  @Output() successPostAdding = new EventEmitter();

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

  addPost()
  {
    console.log(this.model);
    var options = this.httpOptions;
    this.http.post(this.baseUrl + 'Blog', this.model, options).subscribe(response =>
      {
        console.log(response);
        this.toastr.info("Post został dodany");
        this.successPostAdding.emit(true);
      }, error =>
      {
        console.log(error);
        console.log(error.eroor);
        this.toastr.error("Wystąpił problem z dodaniem postu.");
      })
  }

  cancelPost()
  {
    this.cancelPostAdding.emit(true);
  }
}
