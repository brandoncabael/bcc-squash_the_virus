const Cmr1Cli = require('cmr1-cli');


const myCli = new Cmr1Cli({
    name: 'My CLI script name',
    description: 'A description of this script',
    helpHeader: 'Available Options',
    });


let test = myCli.prompt("Does this work? ")
myCli.log(`welcome ${test}`)

const options = ["test", "poop", "slack"]
let selection

var step1 = function () {
    selection = myCli.select(options, "Select one of the elements... ")
    myCli.log(`You selected ${options[selection]}`)
}


do {
    step1()
} while (!myCli.confirm("Is this your final answer?"))

if (selection === 0) {
    myCli.success("You are correct!")
}
else {
    myCli.warn("Suck it!")
}
myCli.log(myCli.options)