//async

const {readFile ,writeFile} = require('fs')
console.log("1")
//callback func is the func passed inside another func as an argument

readFile('./simple/first.txt', 'utf-8', (err, res) =>{               //() =>{} ->callback func
    if(err){
        return
    }
    //const read = res;
    console.log("2")//(read)
})

writeFile('./simple/first.txt','i changed my text' ,{flag:'a'} ,(err, res) =>{               //() =>{} ->callback func
    if(err){
        return
    }
    console.log("3")
} )
console.log("4")

// const {readFileSync ,writeFileSync} = require('fs')
// console.log("1")

// const read = readFileSync('./simple/first.txt' ,'utf-8')//using this func it reads what is thw=ere in text file //utf-8 converts the text into readable form [from ascii to char]

// console.log("2")
// writeFileSync('./simple/first.txt' ,'nothing',{flag:'a'})//flag does not remove the previous text but keeps on updating it
// console.log("3")
// writeFileSync('./simple/second.txt' ,'second file created',{flag:'a'})// if the file declared in the path does not exists then it creates the file
// console.log("4")