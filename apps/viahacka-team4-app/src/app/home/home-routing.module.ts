import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConquistasComponent } from '../conquistas/conquistas.component';
import { DesafiosComponent } from '../desafios/desafios.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'conquistas', pathMatch: 'full' },
      { path: 'conquistas', component: ConquistasComponent },
      { path: 'desafios', component: DesafiosComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
