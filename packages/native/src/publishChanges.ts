import { PublishSubscribe } from '@demo/shared';

export const PublishChanges = <TClass, TValue>(
  { get, set }: ClassAccessorDecoratorTarget<TClass, TValue>,
  context: ClassAccessorDecoratorContext<TClass, TValue>,
): ClassAccessorDecoratorResult<TClass, TValue> => {
  return {
    get() {
      return get.call(this);
    },
    set(newValue: TValue) {
      const oldValue = get.call(this);

      PublishSubscribe.publish({
        className: (this as any).constructor.name,
        propertyName: context.name.toString(),
        newValue,
        oldValue,
      });

      set.call(this, newValue);
    },
  };
};
