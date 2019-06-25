import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSoftKeyboardModule } from './ngx-soft-keyboard/ngx-soft-keyboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgxSoftKeyboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
