import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  baseUrl = "https://api-pznapp.azurewebsites.net/api/";
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    })
  }
  users:any = {};
  filters:any = {};
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers()
  {
    this.http.get(this.baseUrl + 'Users', this.httpOptions).subscribe(response =>
      {
        this.users = response;
        console.log(response);
      }, error =>
      {
        console.log(error.error);
      });
  }

  showProfile(id:any)
  {
    this.router.navigateByUrl("/users/"+id);
  }

  findUsers()
  {
    var url = this.baseUrl + 'Users/?';

    console.log(this.filters);
    var firstName:string = this.filters.firstName;
    if(firstName != null)
    {
      if(firstName.length > 0)
      {
        url += 'FirstName=' + firstName;
      }
    }


    var lastName:string = this.filters.lastName;

    if(lastName != null)
    {
      if(lastName.length > 0)
      {
        if(!url.endsWith('?'))
          url+='&';

        url += 'LastName=' + lastName;
      }
    }

    var userName:string = this.filters.userName;

    if(userName != null)
    {
      if(userName.length > 0)
      {
        if(!url.endsWith('?'))
          url+='&';

        url += 'UserName=' + userName;
      }
    }

    var email:string = this.filters.email;

    if(email != null)
    {
      if(email.length > 0)
      {
        if(!url.endsWith('?'))
          url+='&';

        url += 'Email=' + email;
      }
    }

    var fromDate:Date = this.filters.fromDate;
    if(fromDate != null)
    {
      if(!url.endsWith('?'))
          url+='&';

        url += 'FromDate=' + fromDate;
    }

    var toDate:Date = this.filters.toDate;
    if(toDate != null)
    {
      if(!url.endsWith('?'))
          url+='&';

        url += 'ToDate=' + toDate;
    }


    this.http.get(url, this.httpOptions).subscribe(response =>
      {
        this.users = response;
        console.log(response);
      }, error =>
      {
        console.log(error.error);
      });
  }

}
