import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.page.html'
})

export class DetailPage {

  private user: any;

  constructor(private navCtrl: NavController, 
              private navParams: NavParams) {
    this.user = navParams.data;
  }
}