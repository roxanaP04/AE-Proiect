const obj={
    name: "Roxana",
    great: function(){
        //console.log("Hello "+ this.name)
        console.log(`Hello, ${this.name}`)
    },
    great2: () => {
        //nu merge sa accesezi this.name o saapara undefined
        console.log("Hello "+ this.name)
    }
}

obj.name ="Gabriela"
obj.great= function(){
    console.log("My name is not Gabriela")
}

obj.great()
obj.great2()

