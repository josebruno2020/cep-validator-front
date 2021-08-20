// import { Routes } from "@angular/router";
import { CepCreateComponent } from "src/app/pages/cep-create/cep-create.component";
import { CepListComponent } from "src/app/pages/cep-list/cep-list.component";
import { LoginComponent } from "src/app/pages/login/login.component";

const routes = [
    {
        path:'',
        name:'Lista de Cep',
        nav:true,
        component:CepListComponent
    },    
    {
        path:'cep-create',
        name:'Cadastrar Cep',
        nav:true,
        component: CepCreateComponent,
    },
    {
        path: 'login',
        name:'Login',
        nav:false,
        component: LoginComponent,
    },
];

export default routes;