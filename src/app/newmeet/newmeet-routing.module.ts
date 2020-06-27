import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewmeetPage } from './newmeet.page';

const routes: Routes = [
  {
    path: '',
    component: NewmeetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewmeetPageRoutingModule {}
