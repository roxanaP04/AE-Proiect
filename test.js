//declarare variabile
var x=5;
let y=5;
const z="Roxana"; //asta nu merge modificata ca e constanta
console.log(x, y, z);

x=6;
y=7;

console.log(x, y, z);

function testVariables(param){
    if(param === true){   //3 egaluri se folosesc atunci cand vrem sa verificam type ul unei variabile
        var x=5;
        let y=7;
        const z=6;
    }
    console.log(x, y, z)
}

testVariables(true)


const testVariablesConst = (param) => { //arrow function
    if(param === true){   
        var x=5;
        let y=7;
        const z=6;
    }
    console.log(x, y, z)
}

testVariablesConst(true)


