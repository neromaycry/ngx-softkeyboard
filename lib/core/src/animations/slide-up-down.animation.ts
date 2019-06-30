/*
 * @Description: animations
 * @Author: Guo Jiawei
 * @Date: 2019-06-23 14:52:07
 * @LastEditors: Guo Jiawei
 * @LastEditTime: 2019-06-25 01:43:50
 */
import { trigger, transition, animate, style } from '@angular/animations';

export const SlideUpDownAnimation = trigger('SlideUpDownAnimation', [
  transition(':leave', [animate('150ms ease-out', style({ transform: 'translateY(100%)' }))]),
  transition(':enter', [style({ transform: 'translateY(100%)' }), animate('150ms ease-out', style({ transform: 'translateY(0)' }))]),
]);
