import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  showID: boolean;
  showName: boolean;
  showBirthday: boolean;
  showSex: boolean;

  quickplayOn: boolean;

  constructor() {
    this.showID = true;
    this.showName = false;
    this.showBirthday = false;
    this.showSex = false;
  }

  setQuickplay(bool) {
    this.quickplayOn = bool;
  }

  getQuickplay() {
    return this.quickplayOn;
  }

  changeShowID() {
    this.showID = !this.showID;
  }

  changeShowName() {
    this.showName = !this.showName;
  }

  changeShowBirthday() {
    this.showBirthday = !this.showBirthday;
  }

  changeShowSex() {
    this.showSex = !this.showSex;
  }

  getShowSex() {
    return this.showSex;
  }

  getShowBirthday() {
    return this.showBirthday;
  }

  getShowID() {
    return this.showID;
  }

  getShowName() {
    return this.showName;
  }
}
