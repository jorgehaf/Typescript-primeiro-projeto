export function logarTempoDeExecucao() {
    return function (target, propertKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tempo de execução ${propertKey}: ${(t2 - t1) / 1000}s`);
            retorno;
        };
        return descriptor;
    };
}
