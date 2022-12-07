import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  productname=""
  image=""
  category=""
  description=""
  price=""

  constructor(private api:ApiService){}
  readValues=()=>
  
  {
    let data:any= {"productname":this.productname,"image":this.image,"category":this.category,"description":this.description,"price":this.price}
  console.log(data)
  this.api.addProducts(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("Product added successfully")
        this.productname=""
        this.image=""
        this.description=""
        this.category=""
        this.price=""
      
        
      } else {
        alert("something went wrong")
      }
    }
  )


}


  }

