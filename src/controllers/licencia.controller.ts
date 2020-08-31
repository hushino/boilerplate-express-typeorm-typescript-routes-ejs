import { Request, Response } from "express";
import { Persona } from "../entity/Persona";
import { Licencia } from "../entity/Licencia";
import * as typeorm from "typeorm";

export async function agregarLicencia(req: Request, res: Response) {
  const { id } = req.params;
  const personaRepo = await typeorm.getRepository(Persona).findOne(id);
  res.render("agregarLicencia", { persona: personaRepo });
}

export async function agregarLicenciaPost(req: Request, res: Response) {
  const {
    id,
    fechaLicencia,
    referencias,
    observaciones,
    numeroDeDias,
  } = req.params;

  const personaRepo = await typeorm.getRepository(Persona).findOne(id);

  const licencia = new Licencia();

  licencia.fechaLicencia = fechaLicencia;
  licencia.numeroDeDias = numeroDeDias;
  licencia.observaciones = observaciones;
  licencia.referencias = referencias;
  licencia.persona = personaRepo;
  await typeorm.getRepository(Licencia).save(licencia);

  // personaRepo.licencias = [licencia];
  // await typeorm.getRepository(Persona).save(personaRepo);

  res.render("index");
}
