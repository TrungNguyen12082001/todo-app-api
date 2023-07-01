import { body } from 'express-validator';
import { Priority } from '../enums/Priotity';
import { Status } from '../enums/Status';

export const createValidator = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('The task title mandatory')
    .trim()
    .isString()
    .withMessage('Title needs to be in text format'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('The task date is mandatory')
    .isString()
    .withMessage(
      'The date needs to be a valid date format',
    ),
  body('description')
    .trim()
    .isString()
    .withMessage('Description needs to be in text format'),
  body('priority')
    .trim()
    .isIn([Priority.low, Priority.high, Priority.normal])
    .withMessage(
      'Priority can only be normal, high or low',
    ),
  body('status')
    .trim()
    .isIn([
      Status.todo,
      Status.inProgress,
      Status.completed,
    ])
    .withMessage(
      'Status can only be todo, inProgress or completed',
    ),
];
