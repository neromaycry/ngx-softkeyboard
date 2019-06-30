/*
 * @Description: NgxSoftKeyboardModule
 * @Author: Guo Jiawei
 * @Date: 2019-06-22 23:39:12
 * @LastEditors: Guo Jiawei
 * @LastEditTime: 2019-06-25 01:42:25
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSoftKeyboardComponent } from './components/soft-keyboard/soft-keyboard.component';
import { NgxSoftKeyboardDirective } from './ngx-soft-keyboard.directive';
import { NgxSoftKeyboardKeyComponent } from './components/soft-keyboard-key/soft-keyboard-key.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxSoftKeyboardComponent, NgxSoftKeyboardDirective, NgxSoftKeyboardKeyComponent],
  exports: [NgxSoftKeyboardComponent, NgxSoftKeyboardDirective, NgxSoftKeyboardKeyComponent],
})
export class NgxSoftKeyboardModule {}
