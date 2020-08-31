import { Router, Request, Response, NextFunction } from "express";
import {
  getHome,
  registerGet,
  register,
  login,
  logout,
} from "../controllers/user.controller";
import {
  crearPersona,
  postPersona,
  personas,
  verPersona,
  buscarPostPersona,
  buscarPersona,
  actualizarPersona,
  actualizarPostPersona,
} from "../controllers/persona.controller";
import {
  agregarLicencia,
  agregarLicenciaPost,
} from "../controllers/licencia.controller";

const router = Router();

router.route("/").get(getHome);

router.route("/register").get(registerGet).post(register);
router.route("/login").get(login).post(login);
router.route("/logout").get(logout);

router
  .route("/personas/:page")
  .get(/* hasAccess('contribuyente'), */ personas);

router.route("/verPersona/:id*?").get(verPersona);
router.route("/updatePersona/:id*?").get(actualizarPersona).post(actualizarPostPersona);


router
  .route("/crearPersona")
  .get(/* hasAccess('inspector'), */ crearPersona)
  .post(/* hasAccess('inspector'),  multer.single("image"),*/ postPersona);

router
  .route("/agregarLicencia/:id*?")
  .get(agregarLicencia)
  .post(agregarLicenciaPost);

router.route("/buscar").get(buscarPersona).post(buscarPostPersona);

export default router;
