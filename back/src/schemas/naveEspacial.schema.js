const joi = require('@hapi/joi');

const spacecraftIdSchema = joi.string().regex(/^[0-9-a-fA-F]{24}$/);
const spacecraftActivitySchema = joi.string();
const spacecraftOriginSchema = joi.string();
const spacecraftTripulationSchema = joi.number();
const spacecraftCombustibleSchema = joi.string();
const spacecraftStateSchema = joi.string();

const createSpacecraftSchema = {
  activity: spacecraftActivitySchema.required(),
  origin: spacecraftOriginSchema.required(),
  tripulation: spacecraftTripulationSchema.required(),
  combustible: spacecraftCombustibleSchema.required(),
  state: spacecraftStateSchema.required()
};

const updateSpacecraftSchema = {
  activity: spacecraftActivitySchema,
  origin: spacecraftOriginSchema,
  tripulation: spacecraftTripulationSchema,
  combustible: spacecraftCombustibleSchema,
  state: spacecraftStateSchema
}

module.exports = {
  spacecraftIdSchema,
  createSpacecraftSchema,
  updateSpacecraftSchema
}
