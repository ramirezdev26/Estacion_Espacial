const boom = require('@hapi/boom');
const MongoLib = require('../lib/database');

class NaveEspacialService {

  constructor(){
    this.collection = 'spacecraft';
    this.mongoDB = new MongoLib;
  };


  async findAll() {
    const spacecraft = await this.mongoDB.getAll(this.collection);
    return spacecraft || [];
  };

  async find({ spacecraftId } = {}) {
    const spacecraft = await this.mongoDB.get( this.collection, spacecraftId );
    return spacecraft;
  }

  async createSpacecraft(data) {
    const addSpacecraft = await this.mongoDB.create(this.collection, data);
    return addSpacecraft;
  };

  async updateSpacecraft({ spacecraftId, message } = {}) {
    const updateSpacecraft = await this.mongoDB.update( this.collection, spacecraftId, message );
    return updateSpacecraft
  };

  async deleteSpacecraft({ spacecraftId } = {}) {
    const deletedSpacecraft = await this.mongoDB.delete( this.collection, spacecraftId );
    return deletedSpacecraft;
  };

};

module.exports = NaveEspacialService;
