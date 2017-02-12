import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

import { NavController, LoadingController } from 'ionic-angular';
import { DetailPage } from '../detail-page/detail.page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})

export class HomePage {

  detailPage = DetailPage;
  users: any;

  constructor(private navCtrl: NavController, 
              private http: Http,
              private loadingController: LoadingController) {

    let loadingUsersPopup = this.loadingController.create({
      content: "Loading users..."
    });

    loadingUsersPopup.present();

    this.http.get("http://api.randomuser.me/?results=10").map(res => res.json()).subscribe(data => {
      this.users = data.results;
      loadingUsersPopup.dismiss();
    });
  }

  userDetailsClicked($event, userData) {
    this.navCtrl.push(DetailPage, userData);
  }
}