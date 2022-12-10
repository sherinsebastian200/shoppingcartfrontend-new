import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent {
  userid:any=""
  userdata:any=[]
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("userInfo")
    let data:any={
      "id":this.userid
    }
    this.api.getProfileDetails(data).subscribe(
      (response:any)=>
      {
        this.userdata=response;
      }
    )
  }
  }