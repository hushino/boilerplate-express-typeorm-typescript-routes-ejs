import express, { Application } from "express";
import morgan from "morgan";
import router from "./routes/routes-mysql";
import path from "path";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import session from "express-session";


export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.router(); //mysql
    this.uploadsAndStaticsPublicConfig();
  }
  settings() {
    this.app.set("port", 4000);
    // view engine setup
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "ejs");
  }
  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    //this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(
      session({
        secret: "somesecret3",
        saveUninitialized: false,
        resave: false,
        cookie: { secure: false, maxAge: 6000000000 }, //69 dias
      })
    );
    this.app.use((req, res, next) => {
      let admin = "administrador";
      let usuario = "usuario";
      if (admin === res.req.session.role) {
        res.locals.isAdmin = true;
      } else {
        res.locals.isAdmin = false;
        if (usuario === res.req.session.role) {
          res.locals.isUser = true;
        } else {
          res.locals.isUser = false;
        }
      }

      console.log(req.session.role + " req.session.role");
      next();
    });
  }
  router() {
    this.app.use("/", router);
  }
  // this folder for this application will be used to store public files
  uploadsAndStaticsPublicConfig() {
    this.app.use("/uploads", express.static(path.resolve("uploads")));
    this.app.use(express.static(path.join(__dirname, "public")));
  }
  async listen() {
    this.app.listen(this.app.get("port"));
    console.log("Server on port", 4000);
  }
}
