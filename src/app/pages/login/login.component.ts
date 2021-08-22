import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import apiMessage from 'src/core/helpers/errorMessage';
import { CacheService } from 'src/core/services/cache.service';
import { LoginService } from 'src/core/services/login.service';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BasePageComponent implements OnInit {
  loginGroup:FormGroup;
  constructor(
      private loginService:LoginService,
      private fb:FormBuilder,
      private cacheService:CacheService,
      private router: Router,
  ) { 
      super();
      this.loginGroup = this.fb.group({
          email: this.fb.control(null, Validators.required),
          password: this.fb.control(null, Validators.required)
      })
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.loginGroup.value).subscribe((res:any) => {
        this.cacheService.setUser(res.token, res.user);
        return this.router.navigate(['']);
    }, err => {
        console.log(err);
        this.setupAlert(apiMessage.errorLogin, 'danger');
    })
  }

}
