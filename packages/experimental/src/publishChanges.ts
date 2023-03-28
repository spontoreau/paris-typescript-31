import { PublishSubscribe } from '@demo/shared';

export const PublishChanges: PropertyDecorator = (target, key) => {
  let value = (target as any)[key];

  const get = function () {
    return value;
  };

  const set = function (newValue: any) {
    const oldValue = value;
    value = newValue;
    PublishSubscribe.publish({
      className: target.constructor.name,
      propertyName: key.toString(),
      newValue,
      oldValue,
    });
  };

  const descriptor = Object.getOwnPropertyDescriptor(target, key);

  if (!descriptor) {
    Object.defineProperty(target, key, {
      get,
      set,
      enumerable: true,
      configurable: true,
    });
  } else if (descriptor && descriptor.configurable) {
    Object.defineProperty(target, key, { ...descriptor, get, set });
  }
};
