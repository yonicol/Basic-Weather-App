import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCitysComponent } from './all-citys/all-citys.component';
import { ByCityComponent } from './by-city/by-city.component';


const routes: Routes = [
  {path: "", component: AllCitysComponent},
  {path: "bycity", component: ByCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
