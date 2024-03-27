import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/component/login/login.component';
import { ErrorComponent } from './core/component/error/error.component';
import { DenemelerComponent } from './denemeler/denemeler.component';
import { MenuComponent } from './core/component/menu/menu.component';
import { loginGuard } from './core/guard/login.guard';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'menu', component: MenuComponent, canActivate: [loginGuard],
   children: [
   {path:'yazilim-ilan', loadChildren: () => import('./modules/yazilim-ilan/yazilim-ilan.module').then(m => m.YazilimIlanModule)},
   {path:'ozel-ders-ilan', loadChildren: () => import('./modules/ozel-ders-ilan/ozel-ders-ilan.module').then(m => m.OzelDersIlanModule)},
   {path:'cevirmenlik-ilan', loadChildren: () => import('./modules/cevirmenlik-ilan/cevirmenlik-ilan.module').then(m => m.CevirmenlikIlanModule)},
 ] 
  },
  { path:'denemeler', component: DenemelerComponent },
  { path:'**', component: ErrorComponent }, // yukarıdaki path tanımlarına uymayan bir şey yazılmışsa anlamına geliyor.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
}