import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YazilimIlanRoutingModule } from './yazilim-ilan-routing.module';
import { YazilimIlanComponent } from './yazilim-ilan/yazilim-ilan.component';
import { YazilimIlanVerComponent } from './yazilim-ilan-ver/yazilim-ilan-ver.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    YazilimIlanComponent,
    YazilimIlanVerComponent
  ],
  imports: [
    CommonModule,
    YazilimIlanRoutingModule,
    ReactiveFormsModule,
  ]
})
export class YazilimIlanModule { }
