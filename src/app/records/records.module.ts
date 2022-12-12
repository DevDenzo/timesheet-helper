import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecordsPage } from './records.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RecordsPageRoutingModule } from './records-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RecordsPageRoutingModule
  ],
  declarations: [RecordsPage]
})
export class RecordsPageModule {}
