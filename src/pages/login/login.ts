import { Component, NgZone } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { NavController, LoadingController } from 'ionic-angular';
import { Doctors } from '../../data/doctor';
import { Patients } from '../../data/patient';
import { HomePage } from "../home/home";
declare let localStorage:any;
import {Http} from '@angular/http';
import {Config} from '../../app/app.config';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  doctors = [];

  constructor(public navCtrl: NavController, public http: Http, private _ngZone: NgZone, public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    let headers = new Headers({ 'Content-Type': 'application/json',"X-Developer-Id": "ddfe7623e35a427f9d5de7d4d274ce5f",
      "X-Api-Key": "6aac2f923eec5d721f58111c3a9ce3336a0ba4a5" });
    let options = new RequestOptions({ headers: headers });
    let url = 'https://mycarespot.sandbox.connectedcare.md/api/v2/account/token';
    this.http.post(url, {
      "userTypeId": 2,
      "hospitalId": 149,
      "email": "snapmcgrath+149@gmail.com",
      "password": "Password@123"
    }, options)
      .map(res => res.json())
      .subscribe(
        response => {
          console.log(response)
          let headers = new Headers({ 'Content-Type': 'application/json',"X-Developer-Id": "ddfe7623e35a427f9d5de7d4d274ce5f",
            "X-Api-Key": "6aac2f923eec5d721f58111c3a9ce3336a0ba4a5" , "Authorization": "Bearer " + response.data[0].access_token});
          let options = new RequestOptions({ headers: headers });
          let url = 'https://mycarespot.sandbox.connectedcare.md/api/v2/physicians';
          this.http.get(url, options)
            .map(res => res.json())
            .subscribe(
              response => {
                this.doctors = response.data[0];
                console.log(this.doctors )
                loader.dismiss();
              },
              error => console.log(error)
            );
        },
        error => console.log(error)
      );
  }

  selectUser (item) {
    console.log(item)
    let doctor = {
      id: item.userId,
      mycarespot: {
        Id: item.userId,
        Name: item.fullName,
        Image: item.profileImage,
        Speciality: item.medicalSpeciality
      },
      mycarespotRole: 'doctor'
    }

    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    this.http.post(Config.url + Config.api.user, doctor)
      .map(res => res.json())
      .subscribe(
        response => {
          localStorage.setItem('user', JSON.stringify(response));
          loader.dismiss();
          this.navCtrl.push(HomePage);
        }
      )
    // let user;
    // if (index == 1) {
    //   user = Doctors[0];
    // } else if (index == 2) {
    //   user = Patients[0]
    // }
    // user.type = index;
    // localStorage.setItem('user', JSON.stringify(user));
    // this.navCtrl.push(HomePage);
  }



}
