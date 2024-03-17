import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
    this.conversionRate = 0;
    Object.defineProperties(this, {
      currency: {
        get: () => this._currency,
        set: () => {
          this._currency = Currency;
        },
      },
      amount: {
        get: () => this._amount,
        set: (value) => {
          this._amount = value;
        },
      },
    });
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} (${this.currency._code})`;
  }

  static convertPrice() {
    return `${Pricing._amount} * ${this.conversionRate}`;
  }
}
