import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() alertType: string;
  @Input() message:string;
  alertClass: string;
  constructor() { }

  ngOnInit(): void {
      this.alertClass = `alert alert-${this.alertType}`;
  }

}
