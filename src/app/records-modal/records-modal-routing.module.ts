import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordsModalPage } from './records-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RecordsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordsModalPageRoutingModule {}
