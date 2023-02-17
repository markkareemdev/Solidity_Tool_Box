// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());


//--------- mocha test setup -------

// class Car {
//     park(){
//         return 'stopped';
//     }

//     drive(){
//         return 'vroom';
//     }
// }

// let car;

// beforeEach(()=> {
//     car = new Car()
// })
// describe('Car', () =>{

//     it('can park', ()=> {
//         // const car = new Car();
//         assert.equal(car.park(), 'stopped')
//     });

//     it('can drive', ()=> {
//         // const car = new Car();
//         assert.equal(car.drive(), 'vroom')
//     });

// } );


let accounts;

beforeEach( async ()=> {
    accounts = await web3.eth.getAccounts();
});


describe ('Inbox', ()=>{

    it('deploys a contract', () => {
        console.log(accounts);
    });

});