import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-posts-management',
  templateUrl: './user-posts-management.component.html',
  styleUrls: ['./user-posts-management.component.css']
})
export class UserPostsManagementComponent implements OnInit {

  mode:string = "read";
  currentPostId:any;

  constructor(private http:HttpClient, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.mode = "read";
  }

  addPost()
  {
    this.mode = "add";
  }

  editPost(id:any)
  {
    this.currentPostId = id;
    this.mode = "edit";
  }

  cancelPostAdd(event:boolean)
  {
    if(event)
    {
      this.mode = "read";
    }
  }

  successPostAdd(event:boolean)
  {
    if(event)
    {
      this.mode = "read";
    }
  }

  cancelPostEdit(event:boolean)
  {
    if(event)
    {
      this.mode = "read";
    }
  }

  successPostEdit(event:boolean)
  {
    if(event)
    {
      this.mode = "read";
    }
  }
}
