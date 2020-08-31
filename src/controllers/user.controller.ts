import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export async function getHome(req: Request, res: Response) {
  res.render("index");
}

export async function logout(req: Request, res: Response) {
  res.clearCookie("connect.sid");
  res.redirect("/");
}

export async function login(req: Request, res: Response) {
  let { email } = req.body;
  const userRepository = getRepository(User);
  let user: User;
  try {
    user = await userRepository.findOneOrFail(email);
    if (user) {
      req.session.role = user.role;
      res.redirect("personas/1");
    } else {
      res.redirect("login");
    }
  } catch {
    res.redirect("register");
  }
}

export async function registerGet(req: Request, res: Response) {
  res.render("register");
}

export async function register(req: Request, res: Response) {
  let { email, password } = req.body;
  const userRepository = getRepository(User);
  const user = new User();
  user.email = email;
  user.password = password;
  user.role = "usuario";
  await userRepository.save(user);
  res.render("login");
}
