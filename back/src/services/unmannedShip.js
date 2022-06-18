const Spacecraft = require('./spacecraft');

class UnmannedShip extends Spacecraft {
  constructor({
    activity, origin, tripulation, combustible, state, weight,
    objectOfStudy = 'undefined',
    }) {
    super({activity, origin, tripulation, combustible, state, weight});
    this.objectOfStudy = objectOfStudy;
    this.type = 'nave no tripulada';
  }

  send() {
    const unmannedShip = {
      name: this.name,
      activity: this.activity,
      origin: this.origin,
      tripulation: this.tripulation,
      combustible: this.combustible,
      state: this.state,
      weight: this.weight,
      objectOfStudy: this.objectOfStudy,
      type: this.type
    }
    return unmannedShip;
  }

  message () {
    console.log('Esta nave es de tipo no-tripulada');
  }
}

module.exports = UnmannedShip;
