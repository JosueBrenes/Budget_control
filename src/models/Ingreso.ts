import { Dato } from "./Dato";

export class Ingreso extends Dato {
  static contadorIngresos = 0;
  private _id: number;

  constructor(descripcion: string, valor: number) {
    super(descripcion, valor);
    this._id = ++Ingreso.contadorIngresos;
  }

  get id(): number {
    return this._id;
  }
}
