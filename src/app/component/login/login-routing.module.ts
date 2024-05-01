import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export class LoginRoutingModule { }
