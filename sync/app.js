//file system(fs) module

// const fs = require('fs')
// const read = fs.readFileSync
// const write = fs.writeFileSync

//OR

const {readFileSync ,writeFileSync} = require('fs')

const read = readFileSync('./simple/first.txt' ,'utf-8')//using this func it reads what is thw=ere in text file //utf-8 converts the text into readable form [from ascii to char]

console.log(read)
writeFileSync('./simple/first.txt' ,'nothing',{flag:'a'})//flag does not remove the previous text but keeps on updating it
writeFileSync('./simple/second.txt' ,'second file created',{flag:'a'})// if the file declared in the path does not exists then it creates the file
