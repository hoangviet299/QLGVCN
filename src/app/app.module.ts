import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { KhoaComponent } from './khoa/khoa.component';
import { LophocComponent } from './lophoc/lophoc.component';
import { ShowKhoaComponent } from './khoa/show-khoa/show-khoa.component';
import { AddEditKhoaComponent } from './khoa/add-edit-khoa/add-edit-khoa.component';
import { ShowLopComponent } from './lophoc/show-lop/show-lop.component';
import { AddEditLopComponent } from './lophoc/add-edit-lop/add-edit-lop.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    KhoaComponent,
    LophocComponent,
    ShowKhoaComponent,
    AddEditKhoaComponent,
    ShowLopComponent,
    AddEditLopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
