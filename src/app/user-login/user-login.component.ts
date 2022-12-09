import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email=""
  password=""
  searchUser:any=[]
  
  constructor(private api:ApiService,private router:Router){}
  readValues = () => {
    let data: any = {
      "email": this.email,
      "password": this.password
    }

    this.api.LoginUser(data).subscribe(
      (response: any) => {
        this.email = ""
        this.password = ""
        if (response.status == "success") {
          let userId = response.userId
          console.log(userId)
          localStorage.setItem("userInfo",userId)
          this.router.navigate(["/viewUserProduct"])
        } else {
          alert(response.message)
        }
      }
    )
  }
}