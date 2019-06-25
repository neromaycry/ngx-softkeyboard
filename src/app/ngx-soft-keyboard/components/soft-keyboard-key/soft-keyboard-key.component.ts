/*
 * @Description: SoftKeyboardKey component
 * @Author: Guo Jiawei
 * @Date: 2019-06-23 00:33:39
 * @LastEditors: Guo Jiawei
 * @LastEditTime: 2019-06-25 01:41:42
 */
import { Component, Input, ElementRef } from '@angular/core';
import { NgxSoftKey } from '../../ngx-soft-key.model';
import { NgxSoftKeyboardService } from '../../ngx-soft-keyboard.service';
import { KeyType } from '../../enums/key-type.enum';

@Component({
  selector: 'soft-keyboard-key',
  templateUrl: './soft-keyboard-key.component.html',
  styleUrls: ['./soft-keyboard-key.component.css'],
})
export class NgxSoftKeyboardKeyComponent {
  @Input() key: NgxSoftKey;
  @Input() shifted: boolean;

  private _input: ElementRef;
  pressed = false;

  constructor(private _keyboardService: NgxSoftKeyboardService) {
    this._keyboardService.inputInstance.subscribe(instance => {
      this._input = instance;
    });
  }

  onTouchStart(event) {
    this.pressed = true;
    event.preventDefault();
  }

  onTouchEnd(event, key: NgxSoftKey) {
    this.pressed = false;
    // console.log('pressed:', this.pressed);
    this._inputHandler(key);
    this._input.nativeElement.focus();
    event.preventDefault();
  }

  onMouseDown(event) {
    this.pressed = true;
    event.preventDefault();
  }

  onMouseUp(event, key: NgxSoftKey) {
    this.onTouchEnd(event, key);
  }

  onMouseOut(event) {
    this.pressed = false;
  }

  private _inputHandler(key: NgxSoftKey) {
    switch (key.type) {
      case KeyType.Char:
        this._inputChar(key);
        break;
      case KeyType.Shift:
        this._inputShift();
        break;
      case KeyType.Backspace:
        this._inputBackspace();
        break;
      case KeyType.Space:
        this._inputSpace();
        break;
      case KeyType.Enter:
        this._inputEnter();
        break;
      case KeyType.Alt:
        this._inputAlt();
        break;
      case KeyType.Ctrl:
        this._inputCtrl();
        break;
    }
  }

  private _inputChar(key: NgxSoftKey) {
    const char = this.shifted ? key.upper : key.lower;
    this._input.nativeElement.value += char;
    this._keyboardService.setInputValue(this._input.nativeElement.value);
  }

  private _inputShift() {
    const flag = !this.shifted;
    this._keyboardService.setShifted(flag);
  }

  private _inputBackspace() {
    let value: string = this._input.nativeElement.value;
    value = value.substring(0, value.length - 1);
    console.log(value);
    this._input.nativeElement.value = value;
    this._keyboardService.setInputValue(value);
  }

  private _inputSpace() {
    this._input.nativeElement.value += ' ';
    this._keyboardService.setInputValue(this._input.nativeElement.value);
  }

  private _inputEnter() {
    // TODO: Need more process
    this._input.nativeElement.value += '\n';
    this._keyboardService.setInputInstance(this._input.nativeElement.value);
  }

  private _inputAlt() {}

  private _inputCtrl() {}
}
