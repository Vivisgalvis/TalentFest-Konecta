import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  // Transform ejecuta cada vez que se llama al pipe
  // Value es el paramétro que recibe transform (puede ser de cualquier tipo) y args otro paremetro adicional 
  transform(value: string, args: string): string {
    let limit = args ? parseInt(args, 10) : 10;
    let trail = '...';
    if (value) {
      return value.length > limit ? value.substring(0, limit) + trail : value;
    }
    return value;
  }

}
