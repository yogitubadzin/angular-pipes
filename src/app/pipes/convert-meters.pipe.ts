import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMeters'
})
export class ConvertMetersPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) {
      return '';
    }

    return value * 1.60934 * 1000;
  }
}
