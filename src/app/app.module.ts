import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CepCreateComponent } from './pages/cep-create/cep-create.component';
import { CepListComponent } from './pages/cep-list/cep-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { TitleComponent } from './components/title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { AlertComponent } from './components/alert/alert.component';
import { BasePageComponent } from './pages/base-page/base-page.component';
import { LoginlayoutComponent } from './layouts/loginlayout/loginlayout.component';
import { LayoutComponentComponent } from './layouts/layout-component/layout-component.component';
import { RegisterComponent } from './pages/register/register.component';
import { JwtInterceptor } from 'src/core/helpers/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CepCreateComponent,
    CepListComponent,
    NavBarComponent,
    TitleComponent,
    LoadingComponent,
    AlertComponent,
    BasePageComponent,
    LoginlayoutComponent,
    LayoutComponentComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
