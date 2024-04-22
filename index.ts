#! /usr/bin/env node
import inquirer from "inquirer";

let answer:{
    sentance:string
} = await inquirer.prompt(
    [
        {
            name:"sentance",
            message:"please enter your sentance what you want those count words",
            type:"input"
        }
    ]
)

let word = answer.sentance.trim().split(" ")
console.log(word)
console.log(`your word counter is ${word.length}`);