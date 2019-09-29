import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { BlogsComponent } from './blogs/blogs.component';


import { HttpClientModule } from '@angular/common/http';
import { FootComponent } from './foot/foot.component';

import { FirebaseModule, FirebaseProvider } from 'angular-firebase';
import * as firebase from 'firebase';
import { DeviceDetectorModule } from 'ngx-device-detector';

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
    HttpClientModule,
    FirebaseModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    FirebaseProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const config = {
      apiKey: 'AIzaSyBIM_tgW7yDupLQESinIdkDz7kW0Gcly60',
      authDomain: 'manojkumar-me.firebaseapp.com',
      databaseURL: 'https://manojkumar-me.firebaseio.com',
      projectId: 'manojkumar-me',
      storageBucket: 'manojkumar-me.appspot.com',
      messagingSenderId: '539794305254',
      appId: '1:539794305254:web:f2c8fadd9e106a6da24b27'
    };
    firebase.initializeApp(config);
    console.log(firebase);
  }
}
