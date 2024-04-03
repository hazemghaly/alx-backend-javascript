import Car from './10-car';

export default class EVCar extends Car {
  constructor(range) {
    super();
    this._range = range;
  }
}
