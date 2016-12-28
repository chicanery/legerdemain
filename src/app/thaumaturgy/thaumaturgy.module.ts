import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageBusService } from './message-bus.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MessageBusService
  ],
  declarations: []
})
export class ThaumaturgyModule { }
