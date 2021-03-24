import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

  public addresses:any=[];
  public countries:any=[];
  public contactId:any ="";
  public newAddress:any ={
      "street1": "",
      "street2": "",
      "town": "",
      "country": "",
      "contactId": "",
    }

  constructor(private route: ActivatedRoute, private apiService : ApiService, private router : Router) { }

  ngOnInit(){
      this.getAddresses();
      this.getCountries();
  }


  getAddresses = async()=>{
    this.contactId = await this.route.snapshot.params.id;
    this.newAddress.contactId = this.contactId;
    var response:any = await this.apiService.getAddresses(this.contactId).toPromise();
    this.addresses = response;
  }


  getCountries = async()=>{
    var response:any = await this.apiService.getCountries().toPromise();
    this.countries = response;
  }


  addAddress = async()=>{
    this.addresses.push(this.newAddress);
  }



  saveAddress = async()=>{
    await this.addresses.forEach(async (address, index)=>{
      if(address.id){
        var response = await this.apiService.deleteAddress(address.id).toPromise();
        delete this.addresses[index]['id'];
        console.log("delete");
        console.log(index);
        
      }
      if(index == this.addresses.length-1){
        this.storeAddress();
      }
    });
    
  }


  storeAddress=async()=>{
    console.log("add");
    await this.addresses.forEach(async (address)=>{
      var response = await this.apiService.saveAddress(address).toPromise();
    });
    this.getAddresses();
  }

}
