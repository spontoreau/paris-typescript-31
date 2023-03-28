import { PublishChanges } from './publishChanges';

export class Person {
  @PublishChanges
  firstName: string;

  @PublishChanges
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
