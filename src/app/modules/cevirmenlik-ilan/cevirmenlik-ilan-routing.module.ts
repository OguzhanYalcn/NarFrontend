import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CevirmenlikIlanComponent } from './cevirmenlik-ilan/cevirmenlik-ilan.component';

const routes: Routes = [
  {path: '', component: CevirmenlikIlanComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CevirmenlikIlanRoutingModule { }
