function move(n, from, to, spare){
  if(n === 0){
    return
  } else {
    move(n - 1, from, spare, to);
    console.count()
    console.log(`moving from ${from} to ${to}`);
    move(n - 1, spare, to, from)
  }
}


move(5, 'A', 'C', 'B')


