import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeRoutingModule } from './home/home-routing.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', canLoad: [AuthGuard], loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    HomeRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
