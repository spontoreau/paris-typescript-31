import { Message, Subscriber } from './types';

export class PublishSubscribe {
  private static subscribers: Subscriber[] = [];
  static publish(message: Message) {
    PublishSubscribe.subscribers
      .filter((s) => s.className === message.className)
      .forEach((s) => s.callback(message));
  }

  static subscribe<TConstructor extends new (...args: any[]) => any>(
    ctor: TConstructor,
    callback: (message: Message) => void,
  ) {
    PublishSubscribe.subscribers.push({
      className: ctor.name,
      callback,
    });
  }

  static unsubscribe<TConstructor extends new (...args: any[]) => any>(ctor: TConstructor) {
    PublishSubscribe.subscribers = PublishSubscribe.subscribers.filter(
      (s) => s.className != ctor.name,
    );
  }
}
