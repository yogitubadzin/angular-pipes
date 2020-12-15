import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertKilometers'
})
export class ConvertKilometersPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) {
      return '';
    }

    return value * 1.60934;
  }
}
