// Protótipo de objetos 


// Criando um obejto literal 
const myObject = { 
    city: "Madrid",
    greet(){
      console.log(`Greetings from ${this.city}`);
    },
};

//acessando um prototype de myObject 
console.log(myObject.toString())
console.log(Object.getPrototypeOf(myObject)); 

const myDate = new Date();
let object = myDate;

console.log(myDate.getMonth())

const option = { month: "long"};
console.log(new Intl.DateTimeFormat("en-US", option));


do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);  

//Propriedade de sombreamento: 
/*É o que acontece se definirmos uma propriedade em um objeto,
 quando uma propriedade com o mesmo nome for definida no protótipo do objeto. */
const personPrototype = {
  greet(){ 
    console.log("Hello");
  },
};

const carl = Object.create(personPrototype);

carl.greet();

