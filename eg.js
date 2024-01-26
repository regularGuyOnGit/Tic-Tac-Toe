// function person(name){
//     const personName = name;
//     // ! a private variable!
//     let age = 25;
//     const incrementAge = ()=> age++;
//     const getAge = ()=>age;
//     return {personName,incrementAge,getAge}
// }

// const nitin = person('nitin');
// nitin.incrementAge()
// nitin.incrementAge()
// console.log(nitin.getAge());

const Formatter = (function() {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    return{log}
  })();

  console.log(Formatter.log('nitin'));