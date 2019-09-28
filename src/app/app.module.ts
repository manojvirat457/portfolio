import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { BlogsComponent } from './blogs/blogs.component';


import { HttpClientModule } from '@angular/common/http';
import { FootComponent } from './foot/foot.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    BlogsComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
