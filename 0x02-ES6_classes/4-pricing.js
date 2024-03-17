import Currency from './3-currency';

export default class Pricing {
  static conversionRate = 0;
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a string');
    }
    this._currency = Currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} ${this.currency._code}`;
  }

  static convertPrice(){
      return `${Pricing._amount} * ${this.conversionRate}`;
  }
}
