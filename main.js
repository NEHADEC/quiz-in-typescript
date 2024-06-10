#! /usr/bin/env node
import inquirer from "inquirer";
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
    // Add more questions here...
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    // Add more questions here...
];
async function startQuiz() {
    let score = 0;
    console.log("Welcome to the Quiz Game!");
    for (const question of questions) {
        const userAnswer = await inquirer.prompt({
            name: "answer",
            type: "list",
            message: question.question,
            choices: question.options
        });
        if (userAnswer.answer === question.answer) {
            console.log("Correct!");
            score++;
        }
        else {
            console.log("Incorrect! The correct answer is:", question.answer);
        }
    }
    console.log("Quiz ended! Your score is:", score, "out of", questions.length);
}
startQuiz();
