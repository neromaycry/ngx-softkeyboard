/*
 * @Description: NgxSoftKeyboardDirective
 * @Author: Guo Jiawei
 * @Date: 2019-06-23 00:57:57
 * @LastEditors: Guo Jiawei
 * @LastEditTime: 2019-07-01 01:44:38
 */
import { Directive, OnInit, OnDestroy, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { NgxSoftKeyboardService } from './ngx-soft-keyboard.service';

@Directive({
  selector: 'input[nsKeyboard]',
})
export class NgxSoftKeyboardDirective implements OnInit, OnDestroy {
  @Output() nsInput = new EventEmitter();

  constructor(private _elementRef: ElementRef, private _keyboardService: NgxSoftKeyboardService) {}

  ngOnInit(): void {
    this._keyboardService.input.subscribe(value => {
      this.nsInput.emit(value);
    });
  }

  ngOnDestroy(): void {
    this._hideKeyboard();
  }

  @HostListener('focus', ['$event'])
  private _showKeyboard() {
    console.log('focus');
    this._keyboardService.setInputInstance(this._elementRef);
    this._keyboardService.setKeyboardActivate(true);
    setTimeout(() => {
      this._keyboardService.setAnimation(true);
    }, 150);
  }

  @HostListener('blur', ['$event'])
  private _hideKeyboard() {
    console.log('blur');
    this._keyboardService.setAnimation(false);
    setTimeout(() => {
      this._keyboardService.setKeyboardActivate(false);
    }, 300);
  }
}
