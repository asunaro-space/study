process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    let strLength = lines[0].length
    let lineLength = strLength + 2;
    let line = '';
    let content = '';

    for (let i = 0; i < lineLength; i++) {
        line = line + '+';
    }

    content = '+' + lines[0] + '+';

    let result = line + '\n' + content + '\n' + line

    console.log(result);
});