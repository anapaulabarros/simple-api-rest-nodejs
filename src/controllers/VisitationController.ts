import { Request, Response } from 'express';
import logger from '../../logger';

export default class visitationController {

  async create(req: Request, res: Response) {
    console.log('CREATE LOGGER');
    let objectLogger: any = {};

    const {
      method,
      url,
      data,
      headers
    } = req.body;
   
    const currentDate = new Date();
    objectLogger.timeReceived = currentDate.toISOString().split('T')[0] +' | '+ currentDate.toLocaleTimeString();
    objectLogger.data = req.body;
   
    try {

      logger.info(objectLogger);
      return res.status(201).send({
        statusCode: 201,
        msg: 'Logger created'
      });

    } catch (error) {
      logger.error(error);
      return res.status(201).send({
        statusCode: 500,
        msg: 'Error to create Logger'
      });
    }

  }
}