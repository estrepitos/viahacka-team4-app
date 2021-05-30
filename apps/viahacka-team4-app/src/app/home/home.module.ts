import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConquistasComponent } from '../conquistas/conquistas.component';
import { DesafiosComponent } from '../desafios/desafios.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ConquistasComponent, DesafiosComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
