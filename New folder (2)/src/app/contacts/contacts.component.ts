import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contacts:any=[];

  public contactName:string = "";

  constructor(private apiService : ApiService, private router : Router) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts = async()=>{
    var response:any = await this.apiService.getContacts().toPromise();
    this.contacts = response;
  }

  addContact = async()=>{
    var name = this.contactName.split(" ");
    var data ={
      'first_name' : name[0],
      'last_name' : name[1],
      'avatar' : "https://pbs.twimg.com/profile_images/490623209822105600/1JHdK9lS.jpeg"
    }
    var response:any = await this.apiService.addContact(data).toPromise();
    this.getContacts();
  }


  showContact =async(id)=>{
    console.log("test");
    this.router.navigate(['show', id]);
  }

}
