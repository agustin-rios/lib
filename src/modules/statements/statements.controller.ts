import { type Request, type NextFunction } from 'express';
import { type Statement } from '@prisma/client';
import { HttpStatusCode } from 'axios';
import StatementService from './statements.service';
import { type CustomResponse } from '@/types/common.type';
import Api from '@/lib/api';

export default class StatementController extends Api {
  private readonly statementService = new StatementService();

  public createStatement = async (
    req: Request,
    res: CustomResponse<Statement>,
    next: NextFunction
  ) => {
    try {
      const statement = await this.statementService.createStatement(req.body);
      this.send(res, statement, HttpStatusCode.Created, 'createStatement');
    } catch (e) {
      next(e);
    }
  };

  public getStatementById = async (
    req: Request,
    res: CustomResponse<Statement>,
    next: NextFunction
  ) => {
    try {
      const statement = await this.statementService.getStatementById(
        Number(req.params.id)
      );
      this.send(res, statement, HttpStatusCode.Ok, 'getStatementById');
    } catch (e) {
      next(e);
    }
  };

  public updateStatement = async (
    req: Request,
    res: CustomResponse<Statement>,
    next: NextFunction
  ) => {
    try {
      const statement = await this.statementService.updateStatement(
        Number(req.params.id),
        req.body
      );
      this.send(res, statement, HttpStatusCode.Ok, 'updateStatement');
    } catch (e) {
      next(e);
    }
  };

  public deleteStatement = async (
    req: Request,
    res: CustomResponse<void>,
    next: NextFunction
  ) => {
    try {
      await this.statementService.deleteStatement(Number(req.params.id));
      res.status(HttpStatusCode.NoContent).end();
    } catch (e) {
      next(e);
    }
  };
}
