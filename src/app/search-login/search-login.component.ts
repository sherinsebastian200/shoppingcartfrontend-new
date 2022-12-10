import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-login',
  templateUrl: './search-login.component.html',
  styleUrls: ['./search-login.component.css']
})
export class SearchLoginComponent {
  productname=""
  constructor(private api:ApiService){}
  searchData:any=[]
  readValues=()=>
  {
    let data:any={"productname":this.productname}
    console.log(data)
    this.api.SearchProducts(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("invalid product name")
        } else {
         this.searchData=response
        }
      }
    )
  }
  }
