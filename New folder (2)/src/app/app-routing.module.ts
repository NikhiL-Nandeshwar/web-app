import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : '', component : HomeComponent},
  {path : 'contacts', component : ContactsComponent},
  {path : 'show/:id', component: ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
