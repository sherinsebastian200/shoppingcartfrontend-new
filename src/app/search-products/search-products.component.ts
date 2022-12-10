import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent {
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
        if(response.length==0){
          alert("Invalid Product name")
      
        }
        else{
          this.searchData=response;

        }
        
          
      }
    )
  
  
  }
  

}
