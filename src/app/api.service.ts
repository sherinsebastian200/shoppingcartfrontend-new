import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addProducts=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  fetchProducts=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  searchProducts=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
  addUser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/userregistration",dataToSend)
  }
}
