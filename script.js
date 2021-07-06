function logPerson(add) {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}, ${add}`);
}

const person1 = {name: 'Миша', age: '20', job: 'front'};
const person2 = {name: 'Маша', age: '22', job: 'back'};

function bind(context, func) {
    return function(...args) {
        return func.apply(context, args);
    }
}

bind(person1, logPerson)('args');
bind(person2, logPerson)('args');