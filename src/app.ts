import { somma, sottrazione } from "./matematica"; // import singoli pezzi
import * as mate from "./matematica"; // importo tutto con alias
import molt from "./matematica"; // importo il default con alias
import op, { sommaMultipla, Calcolatrice } from "./matematica"; // import default + singoli pezzi


console.log(somma(3, 5));

mate.sommaMultipla(4, 6, 7, 8);

molt(4, 7);

console.log("=".repeat(20))
import myPath from "./es-path";
myPath();

console.log("=".repeat(20))
import myFs from "./es-fs";
myFs();