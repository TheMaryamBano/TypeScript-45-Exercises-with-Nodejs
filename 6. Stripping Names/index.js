"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
let whitespaceName = "\n\t Maryam Bano \t\n";
console.log(`The name that contains white space: ${whitespaceName}`);
let nonwhitespaceName = whitespaceName.trim();
console.log(`The name that doesn't contains white space: ${nonwhitespaceName}`);
