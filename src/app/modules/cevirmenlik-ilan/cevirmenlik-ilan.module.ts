import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CevirmenlikIlanRoutingModule } from './cevirmenlik-ilan-routing.module';
import { CevirmenlikIlanComponent } from './cevirmenlik-ilan/cevirmenlik-ilan.component';


@NgModule({
  declarations: [
    CevirmenlikIlanComponent
  ],
  imports: [
    CommonModule,
    CevirmenlikIlanRoutingModule
  ]
})
export class CevirmenlikIlanModule { }
