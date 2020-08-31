import "reflect-metadata";
import { App } from "./app";
//import { startConnection } from "./databases";
import { createConnection } from "typeorm";

async function main() {
  //startConnection(); //mongodb
  createConnection()
    .then(async (connection) => {
      const app = new App(3000);
      await app.listen();
    })
    .catch((error) => console.log("TypeORM connection error: ", error));
}
main();
