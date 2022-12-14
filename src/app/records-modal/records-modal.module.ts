import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordsModalPageRoutingModule } from './records-modal-routing.module';

import { RecordsModalPage } from './records-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordsModalPageRoutingModule
  ],
  declarations: [RecordsModalPage]
})
export class RecordsModalPageModule {}
