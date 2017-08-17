import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
    sortedArray: any[];
  transform(value: any[], keyName: string): string[] {
    this.sortedArray = value.slice();
    this.sortedArray.sort((a, b) => {
      return (a[keyName] > b[keyName]) ? 1 : -1;
    });
    return this.sortedArray;
  }

}
