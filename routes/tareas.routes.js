import express from 'express';
import { 

    agregarCancion,
    consultarCancion,
    modificarCancion,
    eliminarCancion

} from '../controller/tareasController.js';

const router = express.Router();

router.get('/', consultarCancion )
router.post('/', agregarCancion )
router.put('/:id', modificarCancion )
router.delete('/:id', eliminarCancion )

export default router;