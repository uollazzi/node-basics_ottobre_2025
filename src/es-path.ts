import path from "node:path";

export default () => {
    const dir: string = "C:\\Progetti\\Tutorials\\LAB4T\\NODE\\ottobre_2025";

    const adesso: Date = new Date();
    const anno: number = adesso.getFullYear();
    const file: string = "file.txt";

    const filePath = path.join(dir, anno.toString(), file);
    console.log(filePath);

    const filePath2 = "C:\\Progetti\\Tutorials\\LAB4T\\NODE\\ottobre_2025\\albero.jpg";
    console.log("File:", path.basename(filePath2));
    console.log("Dir:", path.basename(dir));
}