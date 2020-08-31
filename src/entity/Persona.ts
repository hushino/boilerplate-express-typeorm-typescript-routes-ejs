import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Licencia } from "../entity/Licencia";

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => Licencia, (licencia) => licencia.persona)
  licencias: Licencia[];

  @Column({ type: "varchar", length: 100, nullable: true })
  nombre: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  apellido: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  cuil: String;
  @Column({nullable: true })
  dni: Number;
  @Column({ type: "varchar", length: 100, nullable: true })
  legajo: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  fechaDeNacimiento: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  apodo: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  foto: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  estadocivil: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  conosinseguro: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  soltero: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  casado: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  conviviente: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  viudo: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  domicilio: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  lugar: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  calle: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  numero: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  telefonoFijo: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  numeroDeCelular: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  oficioprofecion: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  niveldeestudios: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupoSanguineo: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  factor: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  donante: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  diabetes: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  hipertension: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  alergias: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  asma: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  otros: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  fechadeingreso: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  instrumentolegal: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  categoria: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  item: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  planta: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  area: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  direccion: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  annos: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  meses: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  dias: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  realizoComputoDeServicios: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  poseeConocimientoEnMaquinasViales: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  casoemergenciacelular: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  casoemergenciafijo: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  casoemergencianombre: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  casoemergenciacelular2: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  casoemergenciafijo2: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  casoemergencianombre2: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  familiaracargonombre: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  familiaracargonombre2: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  familiaracargonombre3: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  familiaracargonombre4: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  familiaracargonombre5: String;
  @Column({ type: "int", nullable: true })
  familiaracargodni: Number;
  @Column({ type: "int", nullable: true })
  familiaracargodni2: Number;
  @Column({ type: "int", nullable: true })
  familiaracargodni3: Number;
  @Column({ type: "int", nullable: true })
  familiaracargodni4: Number;
  @Column({ type: "int", nullable: true })
  familiaracargodni5: Number;
  @Column({type: "int",nullable: true })
  familiaracargoedad: Number;
  @Column({type: "int",  nullable: true })
  familiaracargoedad2: Number;
  @Column({ type: "int", nullable: true })
  familiaracargoedad3: Number;
  @Column({type: "int",  nullable: true })
  familiaracargoedad4: Number;
  @Column({ type: "int", nullable: true })
  familiaracargoedad5: Number;
  @Column({ type: "varchar", length: 100, nullable: true })
  altura: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  barrio: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  estudiosincompletos: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  conyugeapellido: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  conyugenombre: String;
  @Column({ type: "int", nullable: true })
  conyugedni: Number;
  @Column({ type: "int", nullable: true })
  conyugecuil: Number;

  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarNombre: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarNombre2: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarNombre3: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarNombre4: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarNombre5: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarNombre6: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarNombre7: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarNombre8: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarNombre9: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarNombre10: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarNombre11: String;

  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarApellido: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarApellido2: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarApellido3: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarApellido4: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarApellido5: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarApellido6: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarApellido7: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarApellido8: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarApellido9: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarApellido10: String;
  @Column({ type: "varchar", length: 100, nullable: true })
  grupofamiliarApellido11: String;

  @Column({ type: "int", nullable: true })
  grupofamiliarEdad: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarEdad2: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarEdad3: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarEdad4: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarEdad5: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarEdad6: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarEdad7: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarEdad8: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarEdad9: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarEdad10: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarEdad11: Number;

  @Column({ type: "int", nullable: true })
  grupofamiliarDni: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarDni2: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarDni3: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarDni4: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarDni5: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarDni6: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarDni7: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarDni8: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarDni9: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarDni10: Number;
  @Column({ type: "int", nullable: true })
  grupofamiliarDni11: Number;
}
