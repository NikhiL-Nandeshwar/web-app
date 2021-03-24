import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from 'rxjs/internal/scheduler/async';



const host = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http : HttpClient) { }

  getContacts(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(host+'contacts', httpOptions);
  }


  addContact(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(host+'contacts', data, httpOptions);
  }


  getAddresses(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(host+'contacts/'+id+'/addresses', httpOptions);
  }


  getCountries(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(host+'countries', httpOptions);
  }



  deleteAddress(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.delete(host+'addresses/'+id, httpOptions);
  }


  saveAddress(address){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(host+'addresses', address, httpOptions);
  }
}

