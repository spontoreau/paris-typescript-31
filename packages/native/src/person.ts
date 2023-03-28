import { PublishChanges } from './publishChanges';

export class Person {
  @PublishChanges
  accessor firstName: string;

  @PublishChanges
  accessor lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
