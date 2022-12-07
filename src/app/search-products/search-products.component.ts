import { Component } from '@angular/core';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent {

  productname=""
  readValues=()=>
  {
    let data:any= {"productname":this.productname}
  console.log(data)
  
    }
  

}
