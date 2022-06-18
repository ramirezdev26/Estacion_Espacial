const Spacecraft = require('./spacecraft');

class MannedShip extends Spacecraft {
  constructor({
    activity, origin, tripulation, combustible, state, weight,
    mission = 'undefined',
    }) {
    super({activity, origin, tripulation, combustible, state, weight});
    this.mission = mission;
    this.type = 'nave tripulada';
  }

  send() {
    const mannedShip = {
      name: this.name,
      activity: this.activity,
      origin: this.origin,
      tripulation: this.tripulation,
      combustible: this.combustible,
      state: this.state,
      weight: this.weight,
      mission: this.mission,
      type: this.type
    }
    return mannedShip;
  }

  message () {
    console.log('Esta nave es de tipo tripulada');
  }
}

module.exports = MannedShip;
