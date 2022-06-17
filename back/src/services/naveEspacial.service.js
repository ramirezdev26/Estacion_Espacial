const boom = require('@hapi/boom');
const MongoLib = require('../lib/database');

class NaveEspacialService {

  constructor(){
    this.collection = 'spacecraft';
    this.mongoDB = new MongoLib;
  };


  async findAll() {
    const messages = await this.mongoDB.getAll(this.collection);
    return messages || [];
  }

};

module.exports = NaveEspacialService;
