var input = require('fs').readFileSync('entrada', 'utf8');
var lines = input.split('\n');

let branca = 0
let preta = 0

if (lines[0] % 2 == 0) {
    branca = (lines[0] / 2) * lines[0]
    preta = (lines[0] / 2) * lines[0]
} else {
    branca = Math.ceil((lines[0] * lines[0]) / 2)
    preta = Math.floor((lines[0] * lines[0]) / 2)
}

console.log(`${branca} casas brancas e ${preta} casas pretas`)