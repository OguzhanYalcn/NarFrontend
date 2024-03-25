import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YazilimIlanComponent } from './yazilim-ilan/yazilim-ilan.component';
import { YazilimIlanVerComponent } from './yazilim-ilan-ver/yazilim-ilan-ver.component';

const routes: Routes = [
  { path: '', component: YazilimIlanComponent, pathMatch: 'full'},
  { path: 'ilan-ver', component: YazilimIlanVerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YazilimIlanRoutingModule { }
