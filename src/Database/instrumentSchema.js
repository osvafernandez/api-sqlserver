import Joi from "joi";

export const schemaInstrument = Joi.object({
  noSerieInventario: Joi.string().alphanum().min(1).required(),
  idTipoInstrumento: Joi.number().required(),
  idArea: Joi.number().required(),
  rangoMax: Joi.string().max(50),
  rangoMin: Joi.string().max(50),
  marcaModelo: Joi.string().max(50).required(),
  claseoVd: Joi.string().max(50).required(),
  fechaCalibracion: Joi.date().required(),
  noCert: Joi.string().max(50).required(),
  estado: Joi.string().max(50).required(),
  ubicacion: Joi.string().max(50).required(),
  valorMaxTrabajo: Joi.string().max(50),
  conexionProceso: Joi.string().max(50),
  fechaProximaCalibracion: Joi.date(),
  diametroCaja: Joi.string().max(50),
  longitudInmercion: Joi.string().max(50),
  Comentarios: Joi.string(),
  usuario: Joi.string().max(50).required(),
  baja: Joi.bool().required(),
});
