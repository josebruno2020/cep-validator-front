import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {
  alert:string;
  alertType:string = 'success';
  isAlert:boolean = false;
  loading:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  setupAlert(message:string, type='success') {
    this.isAlert = true;
    this.alert = message;
    this.alertType = type;
  }

  closeAlert() {
      this.isAlert = false;
      this.alert = '';
  }

}
