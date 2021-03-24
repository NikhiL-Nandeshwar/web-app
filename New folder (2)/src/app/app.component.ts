import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  public displaySidebar:boolean = false;

  toggleSidebar=async()=>{
      this.displaySidebar = this.displaySidebar ? false:true;

  }

}


