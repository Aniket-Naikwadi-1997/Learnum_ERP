import { Routes, RouterModule } from "@angular/router";

import { TDSLayoutComponent } from "./tds-layout/tds-layout.component";


const poiRoutes: Routes = [

  {
    path: '',
    component: TDSLayoutComponent,

    children: [

      {

        path: 'dashboard',
        loadChildren: () =>
          import('./component/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),

      },
      {

        path: 'deductor-details',
        loadChildren: () =>
          import('./component/deductor-details/deductor-details.module').then(
            (m) => m.DeductorDetailsModule
          ),

      },
      {

        path: 'tds-return-dashboard',
        loadChildren: () =>
          import('./component/tds-return-dashboard/tds-return-dashboard.module').then(
            (m) => m.TDSRETURNDASHBOARDModule
          ),

      },
      {

        path: 'tds-return',
        loadChildren: () =>
          import('./component/tds-return/tds-return.module').then(
            (m) => m.TDSRETURNModule
          ),

      },
      {
        path: 'masters',
        loadChildren: () =>
          import('./component/masters/masters.module').then(
            (m) => m.MastersModule
          ),

      },
      {
        path: 'business-lead',
        loadChildren: () =>
          import('./component/business-lead/business-lead.module').then(
            (m) => m.BusinessLeadModule
          ),

      },

    ],
  }
];

export const POIRouting = RouterModule.forChild(poiRoutes);
