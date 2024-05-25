import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  {
    path: "",
    //redirectTo: ":companyName/login",
    redirectTo: "tds",
    pathMatch: "full",
  },



  {
    path: 'tds',
    loadChildren: () =>
      import('./tds/tds.module').then(
        (m) => m.POIModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
