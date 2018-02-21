
const level = ['folkeskole', 'efterskole', 'gymnasium'];

class Skole {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents;
    }
    
    set numberOfStudents(newNumberOfStudents) { // <-------- TO-DO: Getter anvendes ikke af class. FIX.
        if (typeof newNumberOfStudents === 'number') {
            this._numberOfStudents = newNumberOfStudents;
            console.dir(`${this._numberOfStudents}Valid input: Setter worked!`);
        } else {
            console.dir('Invalid input: numberOfStudents must be set to a Number.');
            return 'Invalid input: numberOfStudents must be set to a Number.';
        }
    }
    
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }


    quickFacts(_name, _level, _numberOfStudents) {
        return `${this._name} uddanner ${this._numberOfStudents} studerende, og er af uddannelsestypen ${this._level}.`;
    }
    static pickUpSubstitueTeacher(substituteTeachers) {
        let indexSubstituteTeacher = Math.floor(substituteTeachers.length * Math.random());
        return substituteTeachers[indexSubstituteTeacher];
    }
};

class Folkeskole extends Skole {
    constructor(name, level, numberOfStudents, pickUpPolicy) {
        super(name, level, numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }    
};

class Efterskole extends Skole {
    constructor(name, level, numberOfStudents) {
        super(name, level, numberOfStudents);        
    }    
};

class Gymnasium extends Skole {
    constructor(name, level, numberOfStudents, sportsTeam) {
        super(name, level, numberOfStudents);
        this._sportsTeam = sportsTeam;        
    }    
};

const substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
console.dir(Skole.pickUpSubstitueTeacher(substituteTeachers));

const IngridJespersen = new Folkeskole('Ingrid Jespersens Gymnasieskole', level[1], '666');
console.dir(IngridJespersen);
console.dir(IngridJespersen.quickFacts());

const Odder = new Efterskole('Odder', level[1], 365);
console.dir(Odder);
console.dir(Odder.quickFacts());

const ChristianshanvsGymnasium = new Gymnasium('Christianshavns Gymnasium', level[2], 689);
console.dir(ChristianshanvsGymnasium);
console.dir(ChristianshanvsGymnasium.quickFacts());


// ----------------------------------------------------------------------------------------------------------------


// let numberOfStudents = 9;
// let type = typeof numberOfStudents;
// console.dir(`numberOfStudents er af typen "${type}"`);

// if (typeof numberOfStudents === 'number') {
//     console.dir('YES!');
// } else {
//     console.dir('Invalid input: numberOfStudents must be set to a Number.');
// }
