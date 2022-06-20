import Express  from "express";
import izinController from "./controllers/izinController.js";

const router = Express.Router();

router.get('/izin',izinController.getAll)
router.get('/izin/:id',izinController.getId)
router.post('/izin',izinController.input)
router.patch('/izin',izinController.update)
router.delete('/izin',izinController.delete)


export default router;