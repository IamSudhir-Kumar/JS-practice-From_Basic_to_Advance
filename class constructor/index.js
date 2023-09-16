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
    alert(`${this.name} Your ${this.numberBoys} boys is admitted`);
  }
  cancel() {
    alert(`${this.name} Your ${this.numberBoys} boys is detained`);
  }
  give(giveNname, numberBoys) {
    this.name = giveNname;
    this.numberBoys = numberBoys;
  }
}

let westDelhi = new AdmitBoys();
westDelhi.give("Sagarpur", 2);

let delhiCantt = new AdmitBoys();
delhiCantt.give("Kabul line", 4);
///playing with setTimrout and setInterval
setTimeout((
) => {
  delhiCantt.submit();
  westDelhi.cancel();
}, 4000);

setTimeout(() => {
  westDelhi.submit();
  delhiCantt.cancel();
}, 5000);
