import { Component } from '@angular/core';

@Component({
  selector: 'app-search-login',
  templateUrl: './search-login.component.html',
  styleUrls: ['./search-login.component.css']
})
export class SearchLoginComponent {
  productname=""

  readValues=()=>
  {
    let data:any={"productname":this.productname}
    console.log(data)
  }
  data:any=[]
  }