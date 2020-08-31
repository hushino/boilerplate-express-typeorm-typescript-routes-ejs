import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Persona } from "../entity/Persona";

@Entity()
export class Licencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  fechaLicencia: string;

  @Column({ nullable: true })
  referencias: string;

  @Column({ nullable: true })
  numeroDeDias: string;

  @Column({ nullable: true })
  observaciones: string;

  @ManyToOne((type) => Persona, (persona) => persona.licencias)
  persona: Persona;
}
