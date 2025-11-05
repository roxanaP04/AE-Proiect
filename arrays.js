const arr= [1, 2, 3, 4, 5];

console.log(arr)
arr.push(6); //adauga
console.log(arr)
arr.pop()
console.log(arr) //sterge

for( let i=0;i<arr.length;i++){
    //console.log(arr[i])
}

arr.forEach((el, index) =>{
    console.log(el, index)
})

const mappedValues =  arr.map((el, index) => {
    return el*2;
})

for(el of arr){ //asta e pt valoare
    console.log(el);
}

for(el in arr){ //asta e pt index
    console.log(el)
}