import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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
  constructor(private api:ApiService){}
  
  readValues=()=>
  {
    let data:any= {"name":this.name,"address":this.address,"mobno":this.mobno,"email":this.email,"password":this.password,"confirmpassword":this.confirmpassword}
  console.log(data)
  
  this.api.AddUser(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("user added successfully")
        this.name=""
        this.address=""
        this.mobno=""
        this.email=""
        this.password=""
        this.confirmpassword=""
      
        
      } else {
        alert("something went wrong")
      }
    }
  )


}
  

}
