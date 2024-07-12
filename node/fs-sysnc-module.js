//sync method of reading filles can serve single user at a time
// cause it happen line by line
// fs = file system 
const {readFileSync,writeFileSync} = require('fs')
// to read file specify  the directory 
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


console.log(first,second)
//to write a write it will create new one in the specify directory or overwrite the oold one

// to avoid overWritten add the flag object with a like below
writeFileSync('./content/result-sync.txt', `hello old yep`,{flag: 'a'})