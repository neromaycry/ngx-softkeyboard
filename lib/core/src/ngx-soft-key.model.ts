/*
 * @Description: NgxSoftKey Model
 * @Author: Guo Jiawei
 * @Date: 2019-06-23 01:19:55
 * @LastEditors: Guo Jiawei
 * @LastEditTime: 2019-06-25 00:49:06
 */
export class NgxSoftKey {
  upper: string;
  lower: string;
  type: number;

  constructor(upper, lower, type) {
    this.upper = upper;
    this.lower = lower;
    this.type = type;
  }
}
