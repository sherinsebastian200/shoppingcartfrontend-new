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
  price=""
  description=""
 

  constructor(private api:ApiService){}
  readValues=()=>
  
  {
    let data:any= {"productname":this.productname,"image":this.image,"category":this.category,"price":this.price,"description":this.description}
  console.log(data)
  this.api.AddProducts(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("Product added successfully")
        this.productname=""
        this.image=""
       
        this.category=""
        this.price=""
        this.description=""
      
        
      } else {
        alert("something went wrong")
      }
    }
  )


}


  }

