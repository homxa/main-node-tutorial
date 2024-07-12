const filles = async()=>{
  const first = await readFile('./content/first.txt','utf8')
  const second = await readFile('./content/second.txt','utf8')
  const write = await writeFile('./content/write.txt','Add working greate stupit',{flag: 'a'})
  console.log(first, second,'cre')
  
  }
  filles();