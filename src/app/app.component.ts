import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseProvider } from 'angular-firebase';
import { stringify } from '@angular/compiler/src/util';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ]
})
export class AppComponent {
  title = 'Manoj Kumar';
  private deviceDetails = this.deviceInfo.getDeviceInfo();

  constructor(private router: Router, private firebase: FirebaseProvider, private deviceInfo: DeviceDetectorService) {
    this.saveIpAddress();
  }

  saveIpAddress() {
    const ip = stringify(window.location.origin);
    const dateEntry = stringify(Date());
    const device = this.deviceDetails;
    console.log(dateEntry);
    this.firebase.pushData('browser history', {ip, dateEntry, device}).then((v) => {
      console.log(v);
    });
  }

  pushUrl(url: string) {
    this.router.navigate([url]);
  }

}
