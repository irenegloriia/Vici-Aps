import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddchatPageRoutingModule } from './addchat-routing.module';

import { AddchatPage } from './addchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddchatPageRoutingModule
  ],
  declarations: [AddchatPage]
})
export class AddchatPageModule {}
