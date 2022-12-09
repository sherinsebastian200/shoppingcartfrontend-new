import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-login',
  templateUrl: './search-login.component.html',
  styleUrls: ['./search-login.component.css']
})
export class SearchLoginComponent {
  constructor(private api:ApiService){
    api.fetchProducts().subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
productname=""
searchData:any=[]
readValues=()=>
{
  let data:any={"productname":this.productname}
  console.log(data)
  this.api.searchProducts(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.length==0)
      {
        alert("invalid product name")
      }
      else{
        this.data=[];
        this.searchData=response
      }
    }
  )
}
data:any=[]
}