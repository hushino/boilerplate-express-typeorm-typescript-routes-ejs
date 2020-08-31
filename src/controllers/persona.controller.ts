import { Request, Response } from "express";
import { Persona } from "../entity/Persona";
import * as typeorm from "typeorm";

export async function crearPersona(req: Request, res: Response) {
  res.render("crearPersona");
}

export async function postPersona(req: Request, res: Response) {
  await typeorm
    .getRepository(Persona)
    .createQueryBuilder()
    .insert()
    .into(Persona)
    .values({ ...req.body })
    .execute();
  return res.redirect("personas/1");
}

export async function personas(req: Request, res: Response) {
  let perPage: number = 5;
  let page: any = req.params.page || 1;

  const personaCount = await typeorm.getRepository(Persona).findAndCount();

  const personaRepo = await typeorm
    .getRepository(Persona)
    .createQueryBuilder()
    .orderBy("persona.id", "DESC")
    .take(perPage)
    .skip(perPage * page - perPage)
    .getMany();

  res.render("personas", {
    serie: personaRepo,
    current: page,
    pages: Math.ceil(personaCount[1] / perPage),
  });
}

export async function verPersona(req: Request, res: Response) {
  const { id } = req.params;
  const personaRepo = await typeorm.getRepository(Persona).findOne(id);
  res.render("verPersona", { persona: personaRepo });
}

export async function actualizarPersona(req: Request, res: Response) {
  const { id } = req.params;
  const personaRepo = await typeorm.getRepository(Persona).findOne(id);
  res.render("updatePersona", { persona: personaRepo });
}

export async function actualizarPostPersona(req: Request, res: Response) {
  const { id } = req.body;
    typeorm.createQueryBuilder()
    .update(Persona)
    .set({...req.body })
    .where("id = :id", { id: id })
    .execute();
  return res.redirect("personas/1");
}

export async function buscarPostPersona(req: Request, res: Response) {
  const { buscar } = req.body;
  //https://github.com/typeorm/typeorm/blob/master/docs/find-options.md
    let personaRepo = await  typeorm.getRepository(Persona).find({
        where : `nombre LIKE '%${buscar}%'
         OR apellido LIKE '%${buscar}%'
         OR dni LIKE '%${buscar}%'
         OR legajo LIKE '%${buscar}%'
         `
    })
  res.render("buscarPersona", { persona: personaRepo });
}

export async function buscarPersona(req:Request, res:Response){
  res.render("buscarPersona");
}

