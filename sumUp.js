function sumUp(...number){
    let sum = 0;
    for (i = 0; i < number.length; i++) {
      sum += number[i]
    }
    return sum
  }
  const result = sumUp(1,2,3)
  console.log(result)