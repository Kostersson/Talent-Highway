import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValuePipe'
})
export class KeyValuePipePipe implements PipeTransform {

  transform(value, args:any[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }

}
