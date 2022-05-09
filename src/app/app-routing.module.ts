import { DetailCountriesComponent } from './detail-countries/detail-countries.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListCountriesComponent
  },
  {
    path: 'detail/:id',
    pathMatch: 'full',
    component: DetailCountriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
