import { Component, OnInit } from '@angular/core';
import { RouterModule, ROUTES } from '@angular/router';
import routes from 'src/routes';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  pages:any[];
  constructor() { }

  ngOnInit(): void {
      this.pages = routes.filter(route => {
          if(route.nav) {
            return true;
          }
      })
      console.log(this.pages)
  }

}
