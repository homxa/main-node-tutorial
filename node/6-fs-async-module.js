
// fs = file system 


//Async method of reading filles can serve multiple users at a time
// cause does not happen line   by line. just like .then(()) 

const {readFile,writeFile} = require('fs')


readFile('./content/first.txt','utf8',(err,result)=>{
if(err){
  console.log(err)
  return
}
console.log(result)

const first = result 
readFile('./content/second.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  console.log(result)
  
  const second = result 
  
  writeFile('./content/result-Async.txt', `hello old yep creazy`,(err,result)=>{

    if(err){
      console.log(err)
      return
    }
    console.log(result)
  })
  
  })

})