import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  name=""
  address=""
  mobno=""
  email=""
  password=""
  confirmpassword=""
  
  readValues=()=>
  {
    let data:any= {"name":this.name,"address":this.address,"mobno":this.mobno,"email":this.email,"password":this.password,"confirmpassword":this.confirmpassword}
  console.log(data)
  
    }
  

}
