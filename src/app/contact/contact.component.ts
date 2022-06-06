import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model:any = {};

  constructor(private http:HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {

  }
  baseUrl = "https://api-pznapp.azurewebsites.net/api/";
  sendMail()
  {
    this.http.post(this.baseUrl + 'Mail', this.model).subscribe(response =>
      {
        console.log(response);
        this.toastr.info("Wiadomość została wysłana.");
        this.model = {};
      },error =>
      {
        console.log(error);
        this.toastr.error(error.error);
      });
  }
}
