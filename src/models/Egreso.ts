import { Dato } from "./Dato";

export class Egreso extends Dato {
  static contadorEgresos = 0;
  private _id: number;

  constructor(descripcion: string, valor: number) {
    super(descripcion, valor);
    this._id = ++Egreso.contadorEgresos;
  }

  get id(): number {
    return this._id;
  }
}
