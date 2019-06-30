/*
 * @Description: NgxSoftKeyboardComponent
 * @Author: Guo Jiawei
 * @Date: 2019-06-22 23:39:28
 * @LastEditors: Guo Jiawei
 * @LastEditTime: 2019-06-25 01:43:10
 */
import { Component, OnInit } from '@angular/core';
import { KEYBOARD_LAYOUT } from '../../ngx-soft-keyboard.config';
import { Observable } from 'rxjs';
import { NgxSoftKeyboardService } from '../../ngx-soft-keyboard.service';
import { SlideUpDownAnimation } from '../../animations/slide-up-down.animation';

@Component({
  selector: 'soft-keyboard',
  templateUrl: './soft-keyboard.component.html',
  styleUrls: ['./soft-keyboard.component.css'],
  animations: [SlideUpDownAnimation]
})
export class NgxSoftKeyboardComponent implements OnInit {
  keyboardShow$: Observable<boolean>;
  keyboardActivated$: Observable<boolean>;
  shifted$: Observable<boolean>;
  
  keyboardLayout = KEYBOARD_LAYOUT;


  constructor(private _keyboardService: NgxSoftKeyboardService) {}

  ngOnInit(): void {
    this.keyboardShow$ = this._keyboardService.isAnimateOn;
    this.keyboardActivated$ = this._keyboardService.isActivated;
    this.shifted$ = this._keyboardService.shifted;
  }

}
