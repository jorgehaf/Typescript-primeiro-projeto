export function inspect(
    target: any, // retorna o construtor se for static e prototype se não for static
    propertKey: String, // Nome do método
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método ${propertKey}`)
        console.log(`--- Parâmetros ${JSON.stringify(args)}`)
        const retorno = metodoOriginal.apply(this, args)
        console.log(`--- retorno ${JSON.stringify(retorno)}`)
        return retorno;
    }
    return descriptor;
}