import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {DataTableModule} from "angular-6-datatable";



@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    NotFoundComponent,    
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    RegisterComponent,
    UserComponent,
    ParentComponent,
    ChildComponent   
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule   
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
