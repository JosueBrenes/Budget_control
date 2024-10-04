export class Dato {
  protected _descripcion: string;
  protected _valor: number;

  constructor(descripcion: string, valor: number) {
    this._descripcion = descripcion;
    this._valor = valor;
  }

  get descripcion(): string {
    return this._descripcion;
  }

  set descripcion(descripcion: string) {
    this._descripcion = descripcion;
  }

  get valor(): number {
    return this._valor;
  }

  set valor(valor: number) {
    this._valor = valor;
  }
}
