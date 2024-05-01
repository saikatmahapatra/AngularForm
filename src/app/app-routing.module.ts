import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//import { LoginComponentComponent } from './login/login-component/login-component.component';
//import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./component/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
