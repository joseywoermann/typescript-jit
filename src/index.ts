import fs from "fs";

type Memory = number[];
type Line = string;

const resetMemory = (): void => {
    for (let i = 0; i < 256; i++) {
        memory[i] = 0;
    }
};

const validLines = (raw: Line[]): Line[] => {
    const valids: Line[] = [];

    raw.forEach((line) => {
        if (
            line.startsWith("POS") ||
            line.startsWith("SET") ||
            line.startsWith("GET") ||
            line.startsWith("DEBUG") ||
            line.startsWith("CLEAR") ||
            line.startsWith("PRINT") ||
            line.startsWith("COPY")
        ) {
            valids.push(line.trimEnd());
        }
    });
    return valids;
};

let memory: Memory = [];
let currentAdress: number = 0;

resetMemory();

/**
 * OP-CODES:
 * ======================================================
 * POS: Move pointer to given position
 * SET: Set value to given number
 * GET: Read value at current position
 * DEBUG: Print entire memory
 * CLEAR: Reset memory
 * PRINT: Print code as character
 * COPY: Copy value of given position to current position
 */

// Read program
const rawLines: Line[] = fs.readFileSync("./program.tsjit").toString().split("\n");
const lines: Line[] = validLines(rawLines);

lines.forEach((line) => {
    const [opcode, ...args] = line.split(":");

    if (opcode === "CLEAR") {
        resetMemory();
    } else if (opcode === "DEBUG") {
        console.log(memory);
    } else if (opcode === "POS") {
        currentAdress = Number(args[0]);
    } else if (opcode === "SET") {
        memory[currentAdress] = Number(args[0]);
    } else if (opcode === "GET") {
        console.log(memory[currentAdress]);
    } else if (opcode === "PRINT") {
        // console.log() automatically appends \n, we don't want that
        process.stdout.write(String.fromCharCode(memory[currentAdress]));
    } else if (opcode === "COPY") {
        memory[currentAdress] = memory[Number(args[0])];
    } else {
        console.log("congratulations, you've broken logic");
    }
});
