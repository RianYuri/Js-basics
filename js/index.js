//practice Js
//Invez de usarmos var usamos o let para declarar variavel
let teste = 'Rian';
console.log(teste);

//Quando for declarar uma variavel que não possa ser mudada o valor usamos o const
const value = 1;
value = 2;
console.log(value);
//Ao tentar declarar um valor diferente, dara um erro no seu console dizendo:
// Assignment to constant variable.

//Values types
let name = 'Rian';// String literal
let age = 18;// Number literal
let isApproved = true;//Boolean = True & False 
let firstName = undefined;//undefined value
let selectedColor = null;//Null value

//Dynamic type
typeof teste; //Esse comando verifica se o valor declarado e uma String, Numero ou etc...  


//Refencial types
//Invez de usarmos let name,let age para um pessoa, podemos utilizar um objeto por exemplo
let pessoa = {
    firstName: 'Rian',
    idade: 18
};
//Dot Notation - caso queira trocar o nome do objeto fazemos esse comando - Padrão usamos o "Dot" do que o "Break"
pessoa.firstName = 'Yuri';

//Break Notation outra forma de poder mudar a propriedade do objeto
pessoa['firstName'] = 'Ohara';

//Array
let selectedObject = ['Bola', 'Tesoura'];
//Como adicionar mais um elemnto no array
selectedObject[2] = 'Papel';//o numero 2 é a posição do elemento nosso array tem 2
// elementos, mas começa contando a partir de 0 então 0,1 e 2 = Papel

//Type of Function
//Perfoming a task
function greet(training, nameLast) {//Training seria o nosso parametro
    console.log('Hello ' + training + '' + nameLast);// Hello Rian Ohara
}
greet('Rian', 'Ohara');//Esse aqui é o nosso argumento

//Calculating a Value
function square(number) {
    return number * number;
}
let number = square(2);
//o resultado sera 4


//Operadores do Javascript
//Arithmetic Operators
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);// resto da divisão
console.log(x ** y); //x elevado a y

//Incrementado (++)
console.log(++x); //Invez de ser 10 vira 11
//Decrementado (--)

// temos algumas combinaações de operadores como por exemplo
// x = x + 5; e a mesma coisa que x += 5;
//x = x * 3; e a mesma cois aque x *= 3;

//Boolean
let z = 1;
//Relational
console.log(z > 0);//True
console.log(z >= 1);//True
console.log(z < 1);//False
console.log(z <= 1);//True

//Equality
console.log(z === 1);//True
console.log(z !== 1);//False

//strict equality (type + value)
console.log(1 === 1);//True
console.log('1' === 1);//false

// Lose equality
console.log(1 == 1);//true
console.log('1' == 1);//true
console.log(true == 1);//true

//Logical Operators with Non-booleans
// Logical OR (||)
// Retorna TRUE se um dos operadores for TRUE                
let altaRenda = false;
let boaPontuacaoCredito = false;
let elegibleForLoan = altaRenda || boaPontuacaoCredito;
console.log('Elegible ', elegibleForLoan);//Eligible false

//NOT (!)
let applicationRefused = !elegibleForLoan; //Esse exclamação dis que se um for FALSE ou outro tem que ser TRUE
console.log('Application Refused', applicationRefused);//Application Refused TRUE


//Conditional Statemant

//IF & ELSE
let hour = 10;
if (hour >= 6 && hour < 12) {
    console.log('Good morning');
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good evening');
}

//Switch & Case

let role = 'guest';
switch(role){
    case 'guest':
        console.log('Guest User');
        break;
        
        case 'moderator':
            console.log('Moderator user');
            break;
            default:
                console.log('Unknown User');
}

//FOR 
for(let i = 0; i<5;i++){
    console.log('Good Morning');
}

//Nesse codigo mostro os numeros impares de 1 ate 5
for(let i = 0; i<=5;i++){
    if(i % 2 !== 0){
        console.log(i);//1 3 5
    }
}

//While 
//Nesse codigo mostro os numeros impares de 1 ate 5 usando o While
let l = 0;
while(l<=5){
    if(l % 2 !== 0){
        l++;
        console.log(l);
    }
}

//Do while
//Nesse codigo mostro os numeros impares de 1 ate 5 usando o Do While

let d = 0;
do{
    if(d % 2 !== 0){
        d++;
        console.log(d);
    }
}while(d <=5);

//For In

const person = {
    name: 'mosh',//[LOG]: "name",  "mosh" 
    age: 18      //[LOG]: "age",  18 
};
for(let key in person){
    console.log(key, person[key]);
}

const color = ['red','green',
               'blue','yellow'];//[LOG]: "0",  "red" 
                                //[LOG]: "1",  "green" 
                                // [LOG]: "2",  "blue" 
                                //[LOG]: "3",  "yellow" 

for(let index in color){
    console.log(index, color[index]);
}

//For of e a mesma coisa que o for in so que troca o 'in' por of e não precisa de colchetes

for(let colors of color){
    console.log(colors);
}