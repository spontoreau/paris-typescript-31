export interface Message {
  className: string;
  propertyName: string;
  oldValue: unknown;
  newValue: unknown;
}

export interface Subscriber {
  className: string;
  callback: (message: Message) => void;
}
