import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import apiMessage from 'src/core/helpers/errorMessage';
import { CacheService } from 'src/core/services/cache.service';
import { LoginService } from 'src/core/services/login.service';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends BasePageComponent implements OnInit {
    registerGroup:FormGroup;
    constructor(
        private loginService:LoginService,
        private fb:FormBuilder,
        private cacheService:CacheService,
        private router: Router,
    ) { 
        super();
        this.registerGroup = this.fb.group({
            name: this.fb.control(null, Validators.required),
            email: this.fb.control(null, Validators.required),
            password: this.fb.control(null, Validators.required),
            password_confirmation: this.fb.control(null, Validators.required)
        })
    }
  
    ngOnInit(): void {
    }
  
    register() {
      this.loading = true;
      if(this.registerGroup.value.password != this.registerGroup.value.password_confirmation) {
          this.setupAlert('Confirme sua senha!', 'danger');
          return;
      }

      this.loginService.register(this.registerGroup.value).subscribe((res:any) => {
          this.cacheService.setUser(res.token, res.user);
          this.loading = false;
          return this.setupAlert('Cadastro realizado com sucesso! Agora pode fazer o login.');
      }, err => {
          this.loading = false;
          if(err.status === 422) {
              return this.setupAlert(apiMessage.errorEmail, 'danger');
          }
          this.setupAlert(apiMessage.errorRegister, 'danger');
      })
    }

}
