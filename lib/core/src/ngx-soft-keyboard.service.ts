/*
 * @Description: NgxSoftKeyboardService
 * @Author: Guo Jiawei
 * @Date: 2019-06-23 00:33:23
 * @LastEditors: Guo Jiawei
 * @LastEditTime: 2019-06-25 00:51:37
 */
import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgxSoftKeyboardService {
  private _isActivated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _isAnimateOn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _inputInstance: BehaviorSubject<ElementRef | null> = new BehaviorSubject(null);
  private _input: BehaviorSubject<string> = new BehaviorSubject('');
  private _shifted: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  get isActivated(): Observable<boolean> {
    return this._isActivated.asObservable();
  }

  get isAnimateOn(): Observable<boolean> {
    return this._isAnimateOn.asObservable();
  }

  get inputInstance(): Observable<ElementRef | null> {
    return this._inputInstance.asObservable();
  }

  get input(): Observable<string> {
    return this._input.asObservable();
  }

  get shifted(): Observable<boolean> {
    return this._shifted.asObservable();
  }

  setAnimation(flag: boolean) {
    this._isAnimateOn.next(flag);
  }

  setKeyboardActivate(flag: boolean) {
    this._isActivated.next(flag);
  }

  setInputInstance(inputInstance: ElementRef) {
    this._inputInstance.next(inputInstance);
  }

  setInputValue(input) {
    this._input.next(input);
  }

  setShifted(flag: boolean) {
    this._shifted.next(flag);
  }
}
