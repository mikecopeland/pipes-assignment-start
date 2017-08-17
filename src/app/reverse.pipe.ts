import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  reversedString: string;
  transform(value: any): any {
    this.reversedString = '';
    if (value.length) {
      for (const c in value) {
        this.reversedString = this.reversedString + value.charAt(value.length - 1 - +c);
      }
    }
    return this.reversedString;
  }

}
