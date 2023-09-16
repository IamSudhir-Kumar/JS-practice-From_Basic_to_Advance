//syntax
/* 
class MyClass {
    constructor() {...}
    method1() {...}
    method2() {...}
    method3() {...}
    ....
}
*/
/// only camel case is used in Class
class AdmitBoys {
    submit() {
        alert(`${this.name} Your ${this.numberBoys} boys is admitted`)
    }
    cancel() {
        alert(`${this.name} Your ${this.numberBoys} boys is detained`)
    }
    give(giveNname , numberBoys){ 
        this.name = giveNname 
        this.numberBoys = numberBoys
    }
}

let westDelhi = new AdmitBoys()
westDelhi.give("Sagarpur" , 2)

let delhiCantt = new AdmitBoys()
delhiCantt.give("Kabul line" , 4)

westDelhi.submit();
westDelhi.cancel();

delhiCantt.submit();
delhiCantt.cancel();