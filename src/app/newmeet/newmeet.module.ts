import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewmeetPageRoutingModule } from './newmeet-routing.module';

import { NewmeetPage } from './newmeet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewmeetPageRoutingModule
  ],
  declarations: [NewmeetPage]
})
export class NewmeetPageModule {}
