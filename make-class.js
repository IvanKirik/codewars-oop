// function Animal(name,species,age,health,weight,color) {
//     this.name = name;
//     this.species = species;
//     this.age = age;
//     this.health = health;
//     this.weight = weight;
//     this.color = color;
// }

const Animal = makeClass("name","species","age","health","weight","color");
function makeClass(...properties) {
    function CreateClass(...values) {
        properties.forEach((key, index) => {
            this[key] = values[index];
        })
    }
    return CreateClass;
}
