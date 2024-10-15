const student = {
    name: 'Mihai Adrian',
    email: "email@gmail.com",
    age: 21,
    meet: function(){
        console.log(this.name);
    },
    // meet2: ()=>{
    //     console.log(this.name);
    // } - neindicat, nu avem this
}

console.log(student.email);
console.log(student["email"]); //alternativa
student.meet();

function test1 (name){
    console.log(name);
}

const arrTest1 = (name) =>{
    console.log(name);
}

test1("Adrian");
arrTest1('Adrian');