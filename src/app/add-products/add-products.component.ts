import { Component } from '@angular/core';

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

  readValues=()=>
  {
    let data:any= {"productname":this.productname,"image":this.image,"category":this.category,"description":this.description,"price":this.price}
  console.log(data)
  
    }
  

}