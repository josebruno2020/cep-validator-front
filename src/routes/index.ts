// import { Routes } from "@angular/router";
import { CepCreateComponent } from "src/app/pages/cep-create/cep-create.component";
import { CepListComponent } from "src/app/pages/cep-list/cep-list.component";
import { LoginComponent } from "src/app/pages/login/login.component";
import { AuthGuard } from "src/core/guards/auth.guard";
import { LoginlayoutComponent } from "src/app/layouts/loginlayout/loginlayout.component";
import { LayoutComponentComponent } from "src/app/layouts/layout-component/layout-component.component";
import { RegisterComponent } from "src/app/pages/register/register.component";

const routes = [
    {
        path:'',
        name:'Lista de Cep',
        nav:true,
        component:LayoutComponentComponent,
        children:[
            {path:'', component:CepListComponent}
        ],
        canActivate: [AuthGuard]
    },    
    {
        path:'cep-create',
        name:'Cadastrar Cep',
        nav:true,
        component:LayoutComponentComponent,
        children:[
            {path:'', component:CepCreateComponent}
        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        name:'Login',
        nav:false,
        component:LoginlayoutComponent,
        children: [
            {path:'', component: LoginComponent,}
        ],
        
    },
    {
        path: 'register',
        name:'Cadastro',
        nav:false,
        component:LoginlayoutComponent,
        children: [
            {path:'', component: RegisterComponent,}
        ],
        
    },
];

export default routes;