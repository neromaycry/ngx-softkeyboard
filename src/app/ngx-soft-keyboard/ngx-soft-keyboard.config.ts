/*
 * @Description: Keyboard layouts
 * @Author: Guo Jiawei
 * @Date: 2019-06-23 00:34:22
 * @LastEditors: Guo Jiawei
 * @LastEditTime: 2019-06-25 01:42:17
 */
import { NgxSoftKey } from './ngx-soft-key.model';
import { KeyType } from './enums/key-type.enum';

export const KEYBOARD_LAYOUT = [
  [
    new NgxSoftKey('~', '`', KeyType.Char),
    new NgxSoftKey('!', '1', KeyType.Char),
    new NgxSoftKey('@', '2', KeyType.Char),
    new NgxSoftKey('#', '3', KeyType.Char),
    new NgxSoftKey('$', '4', KeyType.Char),
    new NgxSoftKey('%', '5', KeyType.Char),
    new NgxSoftKey('^', '6', KeyType.Char),
    new NgxSoftKey('&', '7', KeyType.Char),
    new NgxSoftKey('*', '8', KeyType.Char),
    new NgxSoftKey('(', '9', KeyType.Char),
    new NgxSoftKey(')', '0', KeyType.Char),
    new NgxSoftKey('_', '-', KeyType.Char),
    new NgxSoftKey('+', '=', KeyType.Char),
    new NgxSoftKey('', '', KeyType.Backspace),
  ],
  [
    new NgxSoftKey('Q', 'q', KeyType.Char),
    new NgxSoftKey('W', 'w', KeyType.Char),
    new NgxSoftKey('E', 'e', KeyType.Char),
    new NgxSoftKey('R', 'r', KeyType.Char),
    new NgxSoftKey('T', 't', KeyType.Char),
    new NgxSoftKey('Y', 'y', KeyType.Char),
    new NgxSoftKey('U', 'u', KeyType.Char),
    new NgxSoftKey('I', 'i', KeyType.Char),
    new NgxSoftKey('O', 'o', KeyType.Char),
    new NgxSoftKey('P', 'p', KeyType.Char),
    new NgxSoftKey('{', '[', KeyType.Char),
    new NgxSoftKey('}', ']', KeyType.Char),
    new NgxSoftKey('|', '\/', KeyType.Char),
  ],
  [
    new NgxSoftKey('A', 'a', KeyType.Char),
    new NgxSoftKey('S', 's', KeyType.Char),
    new NgxSoftKey('D', 'd', KeyType.Char),
    new NgxSoftKey('F', 'f', KeyType.Char),
    new NgxSoftKey('G', 'g', KeyType.Char),
    new NgxSoftKey('H', 'h', KeyType.Char),
    new NgxSoftKey('J', 'j', KeyType.Char),
    new NgxSoftKey('K', 'k', KeyType.Char),
    new NgxSoftKey('L', 'l', KeyType.Char),
    new NgxSoftKey(':', ';', KeyType.Char),
    new NgxSoftKey('"', '\'', KeyType.Char),
    new NgxSoftKey('', '', KeyType.Enter),
  ],
  [
    new NgxSoftKey('', '', KeyType.Shift),
    new NgxSoftKey('Z', 'z', KeyType.Char),
    new NgxSoftKey('X', 'x', KeyType.Char),
    new NgxSoftKey('C', 'c', KeyType.Char),
    new NgxSoftKey('V', 'v', KeyType.Char),
    new NgxSoftKey('B', 'b', KeyType.Char),
    new NgxSoftKey('N', 'n', KeyType.Char),
    new NgxSoftKey('M', 'm', KeyType.Char),
    new NgxSoftKey('<', ',', KeyType.Char),
    new NgxSoftKey('>', '.', KeyType.Char),
    new NgxSoftKey('?', '/', KeyType.Char),
    new NgxSoftKey('', '', KeyType.Shift),
  ],
  [new NgxSoftKey('', '', KeyType.Space)],
];
