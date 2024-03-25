import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OzelDersIlanRoutingModule } from './ozel-ders-ilan-routing.module';
import { OzelDersIlanComponent } from './ozel-ders-ilan/ozel-ders-ilan.component';


@NgModule({
  declarations: [
    OzelDersIlanComponent
  ],
  imports: [
    CommonModule,
    OzelDersIlanRoutingModule
  ]
})
export class OzelDersIlanModule { }
