import { Router } from 'express';
import Controller from './statements.controller';
import { CreateStatementDto } from '@/dto/statement.dto';
import RequestValidator from '@/middlewares/request-validator';
import { verifyAuthToken } from '@/middlewares/auth';

const statements: Router = Router();
const controller = new Controller();

/**
 * POST /statements/create
 * @summary Create a new statement
 * @tags statements
 * @param {CreateStatementDto} request.body.required
 * @return {Statement} 201 - Statement created successfully
 */
statements.post(
  '/create',
  verifyAuthToken,
  RequestValidator.validate(CreateStatementDto),
  controller.createStatement
);

/**
 * GET /statements/:id
 * @summary Get statement by ID
 * @tags statements
 * @param {integer} id.path.required - Statement ID
 * @return {Statement} 200 - Statement details
 */
statements.get('/:id', verifyAuthToken, controller.getStatementById);

/**
 * PATCH /statements/:id
 * @summary Update statement
 * @tags statements
 * @param {integer} id.path.required - Statement ID
 * @param {CreateStatementDto} request.body.required
 * @return {Statement} 200 - Statement updated successfully
 */
statements.patch(
  '/:id',
  verifyAuthToken,
  RequestValidator.validate(CreateStatementDto),
  controller.updateStatement
);

/**
 * DELETE /statements/:id
 * @summary Delete statement
 * @tags statements
 * @param {integer} id.path.required - Statement ID
 * @return {void} 204 - Statement deleted successfully
 */
statements.delete('/:id', verifyAuthToken, controller.deleteStatement);

export default statements;
