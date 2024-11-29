//const {readFileSync, writeFileSync} = require('fs');
const {readFile, writeFile} = require('fs');

/* Sync:
const first = readFileSync('./content/first.txt', 'utf8');
console.log(first);
const second = readFileSync('./content/second.txt', 'utf8');
console.log(second);

writeFileSync(
    './content/result-sync.txt',
    `Result - first: ${first} and second: ${second} together!`,
    { flag: 'a'} // flag to append results instead of rewriting
);*/

// Async:
readFile('./content/first.txt', 'utf8', (err, result1)=> {
    if (err) {
        return console.log(err);
    }
    console.log(result1);
    const first = result1;
    readFile('./content/second.txt', 'utf8', (err, result2) => {
        if (err) {
            return console.log(err);
        }
        console.log(result2);
        const second = result2;

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first} | ${second}`,
            (err, final_result) => {
                if (err) {
                    return console.log(err);
                }
                console.log(final_result);
            }
        )
    })
});

