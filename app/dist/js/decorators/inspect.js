export function inspect(target, propertKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método ${propertKey}`);
        console.log(`--- Parâmetros ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`--- retorno ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
