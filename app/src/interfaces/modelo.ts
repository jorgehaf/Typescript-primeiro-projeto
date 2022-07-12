import { Comparavel } from "./comparavel.js";
import { Imprimivel } from "./imprimivel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T>{
    
}