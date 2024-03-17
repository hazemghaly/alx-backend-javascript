export default class Currency {
  constructor(code, name) {
    this._name = typeof name === 'string' ? name : console.log(TypeError('Name must be a string'));
    this._code = typeof code === 'string' ? code : console.log(TypeError('code must be a number'));
    Object.defineProperties(this, {
      code: {
        get: () => this._code,
        set: (value) => {
          this._code = value;
        },
      },
      name: {
        get: () => this._name,
        set: (value) => {
          this._name = value;
        },
      },
    });
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
