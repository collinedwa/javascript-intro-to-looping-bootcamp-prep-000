function forLoop(array){
  array = []
  for(let i = 0; i < 25; i++){
    if(i === 1){
    array.push(`I am ${i} strange loop.`)
    }
    else{
    array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(n){
  n = 5
  while (n > 0){
    console.log(--n)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
  array = ["bungaloid", "pungaloid", "sprungaloid"]
  do { array.pop()
  } while(array.length > 0 && maybeTrue())
  return array
}
