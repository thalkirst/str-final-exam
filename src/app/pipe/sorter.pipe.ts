import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[] | null, key: string): any[] | null {
    if (!Array.isArray(value) || key === '') {
      return value;
    }
    return value.sort(function (a, b): number {
      let keyA = a[key];
      let keyB = b[key];
      if (typeof keyA === 'number' && typeof keyB === 'number') {
        return keyA - keyB;
      } else {
        keyA = keyA.toString().toLowerCase();
        keyB = keyB.toString().toLowerCase();
        return keyA.localeCompare(keyB);
      }
    });
  }

}