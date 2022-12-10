import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http:HttpClient) { }
  AddProducts=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  FetchProducts=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  SearchProducts=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
  AddUser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/userregistration",dataToSend)
  }
  
  AddLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/login",dataToSend)
  }
  getProfileDetails=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/viewprofile",dataToSend)
  }
}