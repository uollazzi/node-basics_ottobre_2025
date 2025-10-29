import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";
import { DateTime } from "luxon";
// import process from "node:process";

export default () => {
    const workDir = process.cwd();
    // console.log(workDir);

    const dataFullDir = path.join(workDir, "data");
    const pathDelFile = path.join(dataFullDir, "file.txt");

    // lettura
    try {
        const testo = fs.readFileSync(pathDelFile, "utf-8");
        console.log(testo);
    } catch (error) {
        console.log("Si è verificato un errore");
    }
    finally {
        console.log("Operazione completata.");
    }

    // scrittura
    try {
        let contenuto = `Sono le ore **${new Date().toLocaleTimeString()}**`;

        fs.writeFileSync(path.join(dataFullDir, "orario.md"), contenuto, "utf-8");
        console.log("Scrittura OK");
    } catch (error) {
        console.log("Si è verificato un errore");
    }

    // leggere contenuto cartella
    try {
        // alternativa 1
        const entities = fs.readdirSync(workDir, { withFileTypes: true });

        console.log(`Contenuto directory ${workDir}`)
        for (const entity of entities) {
            console.log(entity.isDirectory() ? "[Dir]" : "[Fil]", chalk.yellow(entity.name));
        }

        // alternativa 2
        const names = fs.readdirSync(dataFullDir);

        for (const name of names) {
            const stat = fs.statSync(path.join(dataFullDir, name));
            let dataCreazione = DateTime.fromMillis(stat.ctimeMs);
            // let dataString = dataCreazione.setLocale("it").toFormat("DDDD dd MMMM yyyy HH:mm");
            let dataString = dataCreazione.setLocale("it").toRelative();
            console.log(stat.isDirectory() ? "[Dir]" : "[Fil]", chalk.green(name), stat.size, dataString);
        }


    } catch (error) {
        console.log("Si è verificato un errore");
    }

    // scrittura directory
    try {

        fs.mkdirSync(path.join(dataFullDir, "fatture"));
        console.log("Scrittura directory OK");
    } catch (error: any) {
        console.log("Si è verificato un errore");
        console.log(error.message);
    }
}