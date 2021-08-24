import express from 'express';
import VisitationController from './controllers/VisitationController';

const routes = express.Router();
const visitationController = new VisitationController();

routes.post('/integration-visitation', visitationController.create);



export default routes;