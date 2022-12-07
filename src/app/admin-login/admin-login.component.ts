import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username=""
  password=""

  constructor(private route:Router){}
  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    if(this.username=="admin" && this.password=="12345"){
      
      
      this.route.navigate(["adminhome"])
    }
    else{
      this.password=""
      this.username=""
      alert("Invalid Credentials")
    }
  }
 

  }


  
 