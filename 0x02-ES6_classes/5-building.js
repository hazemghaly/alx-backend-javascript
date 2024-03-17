export default class Building {
  constructor(sqft) {
    this._sqft = typeof sqft === 'number' ? sqft : console.log(TypeError('sqft must be a number'));
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
