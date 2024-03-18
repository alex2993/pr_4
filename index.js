let name = "Алексей"
console.log("Привет,"+[name]+"!")

function isEven() {
    let a = 24;
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
} 
console.log(isEven());

function Obj() {
    let person = {
        name:"Алексей",
        age:"18",
        city:"Великий Новгород"
    };
    console.log(`Меня зовут ${person.name}, мне ${person.age} лет. Я живу в городе ${person.city}`);
}
Obj()

function ArraySum() {
    let array = [1,2,6,21,5,9]
    let sum = array.reduce((acc,array) => 
    acc + array, 0);
    console.log(sum);

}
ArraySum()

let namePeople = prompt("Введите Ваше имя")
console.log("Привет " + [namePeople] + "!")