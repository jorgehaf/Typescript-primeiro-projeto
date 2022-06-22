export class Negociacao {
  constructor(
    public _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) { }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    let data = new Date(this._data.getTime());
    return data;
  }
}
