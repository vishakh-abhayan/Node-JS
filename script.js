spread opraere

const globalPlayar = ["vishakh","marks","jobs"]
const globalPlayar1 = ["june","may","april"]

const all = [...globalPlayar,...globalPlayar1,"work"]

console.log(all);

const globalPlayar = ["vishakh","marks","jobs"];

const [first,second,third] = globalPlayar;

console.log(third);

const globalPlayar = {
    id : 0,
    name : "vishakh",
    psition:"FW"
};

const {psition,...rest} = globalPlayar;

console.log(rest);

const myfunc = value => value/2;

console.log(myfunc(9));

const globalPlayar = [
    {
        id : 8,
        name : "vishakh",
        psition:"FW"
    },
    {
        id : 5,
        name : "Allu",
        psition:"CB"
    },
    {
        id : 17,
        name : "Midhun",
        psition:"CM"
    }

];

for(let i =0;i<=globalPlayar.length;i++){
    console.log(globalPlayar[i].name);
};

const globalPlayar = [
    {
        id : 8,
        name : "vishakh",
        psition:"SS"
    },
    {
        id : 5,
        name : "Allu",
        psition:"CB"
    },
    {
        id : 6,
        name : "Midhun",
        psition:"CM"
    },
    {
        id : 88,
        name : "ikkaka",
        psition:"SS"
    },
    {
        id : 52,
        name : "gowery",
        psition:"CB"
    },
    {
        id : 11,
        name : "ibra",
        psition:"CM"
    },
    {
        id : 18,
        name : "azife",
        psition:"SS"
    },
    {
        id : 15,
        name : "gabri",
        psition:"CB"
    },
    {
        id : 7,
        name : "loan",
        psition:"CM"
    }

];

const newarry = globalPlayar.filter(value=>value.psition==="SS");

console.log(newarry)

const numA = [18, 48, 600, 70, 30, 34];

const Atotal = numA.reduce((total, value) => total + value,0);
console.log(Atotal);

const newobj = globalPlayar.find(value=>value.id === 1);

const numA=["vishakh","allu","gabri","midhun","hari"];

const sor = numA.sort();

const numA=[18,48,[600,[70],70,30],34,100,[700,[80],57],34,26,89,];
const hey = numA.flat(Infinity);

const globalPlayar = {
  id: 8,
  name: "vishakh",
  age: 18,
  company: {
    company_nam: "apple",
  },
};

if (globalPlayar?.company?.company_nam) {
  console.log(globalPlayar.company.company_nam);
}

const pobj = {};

pobj.pid = 21100456;
pobj.pnam = "ipod";
// pobj.getData = () => console.log(pobj.pid, pobj.pnam);

console.log(pobj);

temrature Fharan to Celciues

let temInF = 50;

let C = ((temInF - 32) * 5) / 9;

console.log(C);

Boolean

let Amark = 6;

let grade = Amark == 10;

console.log(grade);

const globalPlayar = ["vishakh", "marks", "jobs"];

const arry = globalPlayar.map((value) => value);

console.log(arry[0]);
