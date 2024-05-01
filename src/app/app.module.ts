import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
//import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
