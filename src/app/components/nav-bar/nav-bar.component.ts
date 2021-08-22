import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from 'src/core/services/cache.service';
import routes from 'src/routes';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  pages:any[];
  constructor(
      private cacheService:CacheService,
      private router:Router,
  ) { }

  ngOnInit(): void {
    this.getAndFilterPages();
  }
  

  getAndFilterPages() {
    this.pages = routes.filter(route => {
        if(route.nav) {
          return true;
        }
    })
  }

  logout(e) {
      e.preventDefault();
      this.cacheService.setUserNull();
      return this.router.navigate(['/login']);
  }

}
