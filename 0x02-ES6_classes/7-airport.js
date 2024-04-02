export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `Airport ${this._code}]`;
    // return `Airport [SFO] [${this._code}]`;
  }
}
