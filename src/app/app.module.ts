import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

