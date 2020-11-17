import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'show',
    loadChildren: () => import('./layouts/show/show.module').then(m => m.ShowModule),
  },
  {
    path: '',
    redirectTo: 'show/list',
    pathMatch: 'full',
  },
  {
    path: '*',
    redirectTo: 'show/list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
