export class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    template(model: T): string {
        throw Error('Classe filha precisa implementar o método template.')
    }

    update(model: T): void {
        const template = this.template(model)
        this.elemento.innerHTML = template;
    }
}