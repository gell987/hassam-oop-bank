#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
let check = false;
const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));
async function greet() {
    console.clear();
    const rainboxTitle = chalkAnimation.rainbow("Hassam's BANK PIAIC(PIAIC202061)\n");
    await sleep();
    rainboxTitle.stop();
}
async function bank_atm() {
    let answer_user;
    let user_cash;
    let conditions = false;
    let all_cash;
    let error;
    let data;
    const timeouter = (ms = 3000) => new Promise((r) => setTimeout(r, ms));
    const time = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
    async function after_greet() {
        console.log(chalk.black.bgBlueBright(`
enter deposit (to deposit any amount of money since its not real money. after that please enter the amount of money you want to deposit)
enter withdraw (to withdraw the amount ur account has in it.)
enter balance (to check how much money does your account have in it)
if you want to quit enter q
`));
        const answers = await inquirer.prompt({
            name: "user_input",
            type: "input",
            message: "input =",
        });
        answer_user = answers.user_input;
        if (answer_user == "deposit") {
            await time();
            var amount_of_cash = inquirer.prompt({
                name: "cashss",
                type: "number",
                message: "enter the number of money you want to deposit: ",
            });
            let waiting_middle_man = await amount_of_cash;
            user_cash = waiting_middle_man.cashss;
            all_cash = +user_cash;
            await time();
        }
        else if (answer_user == "withdraw") {
            var withdraw_amount = inquirer.prompt({
                name: "withdraw",
                type: "number",
                message: "enter number of money you want to withdraw",
            });
            let withdraw_cash = (await withdraw_amount).withdraw;
            if (all_cash < withdraw_cash) {
                let errorr = createSpinner("insufficient balance try again later!");
                errorr.start();
                await timeouter();
                errorr.error();
            }
            else {
                all_cash -= Number(withdraw_cash);
                console.log(chalk.bgBlack.whiteBright(`
            CHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE CHO CHO CHO kuz kuz kuz
            please take your money`));
            }
        }
        else if (answer_user == "balance") {
            console.log(chalk.bgWhiteBright.blackBright(`
                your account balance is ${all_cash}
                have a nice day`));
        }
        else if (answer_user == "q") {
            conditions = true;
        }
    }
    while (true) {
        if (conditions == false) {
            await after_greet();
        }
        else {
            break;
        }
    }
}
async function account_creation() {
    class person {
        first_name;
        last_name;
        phone_number;
        constructor(first_name, last_name, phone_number) {
            this.first_name = first_name;
            this.last_name = last_name;
            this.phone_number = phone_number;
        }
    }
    let first = await inquirer.prompt({
        name: 'first_name',
        type: "input",
        message: 'please enter your first name: '
    });
    let last = await inquirer.prompt({
        name: 'last_name',
        type: 'input',
        message: 'please enter your last name: '
    });
    let phone = await inquirer.prompt({
        name: 'phone_number',
        type: 'number',
        message: 'please enter your phone number: '
    });
    let data_input = new person(first.first_name, last.last_name, phone.phone_number);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let account_number = getRandomInt(100000000000000000);
    console.log("account created", data_input.first_name + " " + data_input.last_name, "and your account number: ", account_number);
}
async function bank_bill() {
    const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));
    class bill_payment {
        first_name;
        last_name;
        phone_number;
        consumer_number;
        constructor(first_name, last_name, phone_number, consumer_number) {
            this.first_name = first_name;
            this.last_name = last_name;
            this.phone_number = phone_number;
            this.consumer_number = consumer_number;
        }
    }
    let first = await inquirer.prompt({
        name: 'first_name',
        type: "input",
        message: 'please enter your first name: '
    });
    let last = await inquirer.prompt({
        name: 'last_name',
        type: 'input',
        message: 'please enter your last name: '
    });
    let phone = await inquirer.prompt({
        name: 'phone_number',
        type: 'number',
        message: 'please enter your phone number: '
    });
    let consumer = await inquirer.prompt({
        name: 'consumer_number',
        type: 'number',
        message: 'please enter your consumer number: '
    });
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let bill_amount = getRandomInt(10000);
    let spinner = createSpinner(chalk.bgBlackBright.blueBright.bold `hello ${first.first_name} ${last.last_name} please wait until your transaction is being process`);
    await sleep();
    spinner.success({ text: `your bill amount is $${bill_amount} please wait ` });
    await sleep();
    let temp_data = consumer.consumer_number;
    console.log(chalk.bgBlackBright.cyan `your bill has been payed your bill consumer number is ${temp_data}`);
}
await greet();
while (check == false) {
    console.log(chalk.bgBlackBright.redBright `
  please enter bank(to use the bank made by hassam)
  please enter account(to create a bank account)
  please enter bills(to pay bills)
  please enter q to quit`);
    let choices = await inquirer.prompt({
        name: 'choices',
        type: "input",
        message: 'please enter your choice: '
    });
    if (choices.choices == "q") {
        check = true;
    }
    else if (choices.choices == "bank") {
        await bank_atm();
    }
    else if (choices.choices == "account") {
        await account_creation();
    }
    else if (choices.choices == "bills") {
        await bank_bill();
    }
    else {
        console.log("try again please");
    }
}
