import { Router } from 'express';
import { jogosController } from '../controller/jogo.controller.js';

export const jogosRouter = Router();

jogosRouter.get('/', jogosController.getAll);

jogosRouter.get('/:id', jogosController.getById);

jogosRouter.post('/', jogosController.create);

jogosRouter.put('/:id', jogosController.update);

jogosRouter.delete('/:id', jogosController.delete);