import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OzelDersIlanComponent } from './ozel-ders-ilan/ozel-ders-ilan.component';

const routes: Routes = [
  {path: '', component: OzelDersIlanComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OzelDersIlanRoutingModule { }
