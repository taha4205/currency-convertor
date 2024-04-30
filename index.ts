import {log} from "console";
import inquirer from "inquirer";

let currencyconverter ={
    "USD":{
         "USD":1,
         "AED":3.67,
         "PKR":278

    },
    "AED":{
        "USD":1.08,
        "AED":1,
        "PKR":75.81

    },
    "PKR":{
        "USD":0.0036,
        "AED":0.013,
        "PKR":1

    },

}

const answer :{
    from:"USD" |"AED" |"PKR",
    to:"USD" |"AED" |"PKR",
    amount : number,
} = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter your Currency",
            type: "list",
            choices: ["USD","AED", "PKR"]

        },
        {
            name: "to",
            message: "Select which currency convert?",
            type: "list",
            choices: ["USD","AED", "PKR"]
            
        },
        {
            name:"amount",
            message: "Enter your amount in number",
            type: "number",
            choices: ["USD","AED", "PKR"]
        }
    ]
)
const {from,to,amount} = answer;

if(from && to && amount){
    let result = currencyconverter[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`)

}else{
    console.log("invalid operator select")
}