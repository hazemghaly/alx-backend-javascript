export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : console.log(TypeError('Name must be a string'));
    this._length = typeof length === 'number' ? length : console.log(TypeError('Length must be a number'));
    this._students = Array.isArray(students) ? students : console.log(TypeError('students must be a array'));
    Object.defineProperties(this, {
      length: {
        get: () => this._length,
        set: (value) => {
          if (typeof value !== 'Number') {
            throw new TypeError('Length must be a number');
          }
          this._length = value;
        },
      },
      name: {
        get: () => this._name,
        set: (value) => {
          if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
          }
          this._name = value;
        },
      },
      students: {
        get: () => this._students,
        set: (value) => {
          if (typeof value !== 'array') {
            throw new TypeError('students must be a array');
          }
          this._students = value;
        },
      },
    });
  }
}
