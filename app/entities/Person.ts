import {Skill} from './Skill'

export class Person {
  name: string;
  email: string;
  skills: Skill[];
  constructor(name:string, email: string, skills?: Skill[]) {
    this.name = name;
    this.email = email;
    this.skills = skills;
  }

}
