import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ThaumaturgyModule } from './thaumaturgy/thaumaturgy.module';

import { AppComponent } from './app.component';
import { TestAComponent } from './test/test-a/test-a.component';
import { TestBComponent } from './test/test-b/test-b.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAComponent,
    TestBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ThaumaturgyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
