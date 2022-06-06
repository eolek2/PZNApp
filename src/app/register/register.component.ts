import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model:any = {};
  constructor(private accountService:AccountService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register()
  {
    var value = JSON.stringify(this.model);
    console.log(value);
    this.accountService.register(this.model).subscribe(response =>
      {
        console.log(response);
      },error =>
      {
        console.log(error);
        this.toastr.error(error.error);

      });
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }
}
