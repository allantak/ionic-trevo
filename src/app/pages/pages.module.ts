import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { RegistryComponent } from './registry/registry.component';



@NgModule({
  declarations: [LoginComponent, HomeComponent, RegistryComponent],
  imports: [
     CommonModule,
     FormsModule,
     IonicModule,
     ComponentsModule
  ]
})
export class PagesModule { }
