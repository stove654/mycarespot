import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Doctors } from '../../data/doctor';
import { Patients } from '../../data/patient';
import { HomePage } from "../home/home";
declare let localStorage:any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {

    console.log(Doctors);
  }

  selectUser (index) {
    let user;
    if (index == 1) {
      user = Doctors[0];
    } else if (index == 2) {
      user = Patients[0]
    }
    user.type = index;
    localStorage.setItem('user', JSON.stringify(user));
    this.navCtrl.push(HomePage);
  }



}
