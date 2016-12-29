import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from './toolbar/toolbar.module';
import { MessageBusService } from './message-bus.service';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule
  ],
  providers: [
    MessageBusService
  ],
  declarations: [
  ],
  exports: [
    ToolbarModule
  ]
})
export class ThaumaturgyModule { }
