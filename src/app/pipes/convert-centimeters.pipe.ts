import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCentimeters'
})
export class ConvertCentimetersPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) {
      return '';
    }

    return value * 1.60934 * 1000 * 1000;
  }
}
