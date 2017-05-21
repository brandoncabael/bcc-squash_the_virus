'use strict';

const Cmr1Cli = require('cmr1-cli');

const myCli = new Cmr1Cli({
    name: 'My CLI script name',
    description: 'A description of this script',
    helpHeader: 'Available Options',
});

function wait(ms) {
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while (d2 - d < ms);
}


let answerSuccess = function () {
    myCli.success("Congratulations! You may now move on to the next step!");
    console.log("=======================================================================================================================");
    console.log("\n \n \n \n");
    wait(2000);
}
let answerWarn = function () {
    myCli.warn("WARNING! Infection protocols have been prepared!");
    wait(2000);
    myCli.warn("Unfortunately you were wrong, but please, try again!");
    console.log("=======================================================================================================================");
    console.log("\n \n \n \n");
    wait(2000);
}
let answerError = function () {
    myCli.error("SYSTEM INFECTED, SHUTTING DOWN...");
    return 0;
}

let bios = function () {
    console.log("We are now searching your computer's BIOS which stands for 'Basic Input/Output System'...");
    console.log("Basically, this is the system that allows your operating system to work with your hardware...");
    console.log("Here is your challenge question... I'll make it very easy to start off...");

    let userAnswer1 = myCli.prompt("Evaluate the following equation: 4 * 5 / 2 + 6 ");
   
    if (userAnswer1 == 16) {
        answerSuccess();
        ram(); 
    }
    else {
        answerWarn();
    }
    userAnswer1 = myCli.prompt("Evaluate the following equation: 4 * 5 / 2 + 6 ");
    
    if (userAnswer1 == 16) {
        answerSuccess();
        ram();
    }
    else {
        answerError();
    }
}

let ram = function () {
    const multChoiceQuestion = ["Diffusion", "Osmosis", "Bulk Filtration", "Endocytosis"];

    console.log("Ok, now we are searching your RAM...");
    console.log("Your RAM is used by your computer to temporarily store data that it can access very quickly if need be...");
    console.log("It only stores data that programs that are running need...");
    console.log("Here is your challenge question... It will be more difficult than before...");

    let userAnswer2 = myCli.select(multChoiceQuestion, "Which one of the following processes can only occur in a living cell?");

    if (userAnswer2 === 0) {
        answerSuccess();
        hdd();
    }
    else {
        answerWarn();
    }

    userAnswer2 = myCli.select(multChoiceQuestion, "Which one of the following processes can only occur in a living cell?")

    if (userAnswer2 === 0) {
        answerSuccess();
        hdd();
    }
    else {
        answerError();
    }
}

let hdd = function () {
    console.log("We are now in your Hard Drive...");
    console.log("Where RAM was your computers temporary storage... Your Hard Drive is your long-term storage...");
    console.log("Here is your next challenge question... This will be a bit easier than the last one to give you a break...")

    let userAnswer3 = myCli.confirm("A computer needs a discrete Graphics Processing Unit to function properly");

    if (!userAnswer3) {
        answerSuccess();
        network();
    }
    else {
        answerWarn();
    }

    userAnswer3 = myCli.confirm("A computer needs a discrete Graphics Processing Unit to function properly");

    if (!userAnswer3) {
        answerSuccess();
        network();
    }
    else {
        answerError();
    }
}
let network = function () {
    let multChoicePara = ["25%", "0%", "25%", "50%"]

    console.log("CONNECTING TO LOCAL NETWORK ========== 100% COMPLETION");
    console.log("Wow, it was not thought you would make it this far...");
    console.log("We have now moved onto your local network, which means this must be where it was right?");
    console.log("Well, this will be the most difficult question... Good luck!");

    let userAnswer4 = myCli.select(multChoicePara, "What is the probability you will get this question correct?");

    myCli.warn("NO! That is wrong!");
    wait(1250);
    myCli.warn("Did you really think there was a virus out there that would give you a chance to un-infect your system?");
    wait(1250);
    myCli.warn("Well, except ransomwares...");
    wait(2000);
    myCli.warn("In either case, sorry... but this game was not fair to begin with!");
    answerError();
}
console.log("Hello, I am a virus and I would like to play a game with you...")
console.log("Here is the issue, I'm attempting to infect your system and many other systems around the world...")
console.log("But I do not want to do this silently, and I would like to give you a chance to un-infect your system...")
console.log("My hope's are that you take this series of tests and share your experience with everyone else so they know what I am...")
console.log("The rules are simple, my creator has given me some code to search your system, I know, not your typical virus...")
console.log("What I will do, is guide you through your system, and give you some challenge questions...")
console.log("If you can correctly answer each question, I will reveal to you if I am located in that particular system...")
console.log("But beware, you get two tries... If you fail... I will not allow you to continue...")
console.log("Best of luck... You're going to need it...")
console.log("=======================================================================================================================")
console.log("\n \n \n \n");

bios();
