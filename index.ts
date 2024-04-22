#! /usr/bin/env node
import inquirer from "inquirer";

let answer:{
    sentance:string
} = await inquirer.prompt(
    [
        {
            name:"sentance",
            message:"please enter your sentance and counter to word",
            type:"input"
        }
    ]
)

let word = answer.sentance.trim().split(" ")
console.log(word)
console.log(`your word counter is ${word.length}`);