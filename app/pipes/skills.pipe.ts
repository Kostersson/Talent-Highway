import * as _ from 'lodash';
import {Pipe} from '@angular/core';

@Pipe({
  name: 'SkillsPipe',
  pure: false
})
export class SkillsPipe {
  transform(persons: any, args?: any) {
    let skills = args;
    let retu: any = [];
    persons.forEach((person: any) => {
      if (_.intersection(skills, person.skills).length > 0) {
        retu.push(person);
      }
    });
    return retu;
  }

}
