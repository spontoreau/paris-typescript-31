import { PublishSubscribe } from '@demo/shared';
import { Person } from './person';

PublishSubscribe.subscribe(Person, (e) =>
  console.log(
    `Property ${e.propertyName} in ${e.className} changed. Old value: ${e.oldValue} New value:${e.newValue}`,
  ),
);

const sylvain = new Person('Sylvain', 'Pontoreau');

sylvain.firstName = 'test';
