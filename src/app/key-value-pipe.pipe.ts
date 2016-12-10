import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValuePipe'
})
export class KeyValuePipePipe implements PipeTransform {

  transform(value, args:any[]) : any {
    let result = [];
    for (let key in value) {
      result.push({$key: key, $val: value[key]});
    }
    return result;
  }

}
