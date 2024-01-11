function intOrString(input) {
    if (typeof input === 'number') {
          return "num"
    } else {
    return "str"
    }
  }
  
  console.log(intOrString(6))
  console.log(intOrString("fsd"))
  
  
  
  function intOrStringV2(input) {
    return (typeof input === 'number') ? "num" : "str";
  }
  
  console.log(intOrString(6))
  console.log(intOrString("fsd"))


  let magic = () => new Date();

  cont increment = (value, number=1)=> value+number

  
const arr=[1, 2];
arr[10]=true;


for (let i=0; i < arr.length ; i++){
console.log(arr[i])
}

for (let key of arr){
 console.log(key)
}

for (let ats in arr) {
 console.log(ats)
}

arr.forEach((newArr)=>console.log(newArr));