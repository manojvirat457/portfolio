import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from 'angular-firebase';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebase: FirebaseProvider) {  }

  ngOnInit() {
  }

  sendMail(mail: string, content: string) {
    if (mail !== '' && content !== '') {
      this.firebase.pushData('mail content', {mail, content}).then((value) => {
        console.log('Submitted successfully');
      });
    }
  }

}
