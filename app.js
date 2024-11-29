const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
console.log(first);
const second = readFileSync('./content/second.txt', 'utf8');
console.log(second);

writeFileSync(
    './content/result-sync.txt',
    `Result - first: ${first} and second: ${second} together!`,
    { flag: 'a'} // flag to append results instead of rewriting
);
