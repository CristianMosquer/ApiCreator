const { body, param } = require('express-validator');

// Validaciones comunes para vuelos
const vueloBaseValidation = [
  body('nombre').notEmpty().withMessage('El nombre del vuelo es requerido'),
  body('destino').notEmpty().withMessage('El destino es requerido'),
  body('fecha').optional().isISO8601().withMessage('Formato de fecha inválido (Año/mes/día)'),
  body('horario').notEmpty().withMessage('El horario es requerido'),
  body('numeroAsientos').isInt().withMessage('El número de asientos debe ser un número entero'),
  body('asientosDisponibles').isInt({ min: 0 }).withMessage('La cantidad de asientos disponibles debe ser un número entero'),
];

// Validación para crear un vuelo
const createVueloValidation = [
  // ...vueloBaseValidation,
  // body('developerId').isMongoId().withMessage('ID de desarrollador inválido'),
];

// Validación para actualizar un vuelo
const updateVueloValidation = [
  ...vueloBaseValidation,
  param('vueloId').isMongoId().withMessage('ID de vuelo inválido'),
];

// Validación para eliminar un vuelo
const deleteVueloValidation = [
  param('vueloId').isMongoId().withMessage('ID de vuelo inválido'),
];

// Validación para cambiar el estado de un vuelo
const changeStateVueloValidation = [
  body('vueloId').isMongoId().withMessage('ID de vuelo inválido'),
  body('estado').isIn(['Pendiente', 'En progreso', 'Completada']).withMessage('Estado inválido'),
];

module.exports = {
  createVueloValidation,
  updateVueloValidation,
  deleteVueloValidation,
  changeStateVueloValidation,
  vueloBaseValidation,
};
