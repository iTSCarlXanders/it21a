const readline = require("readline");
const MathUtils = require("./mathUtils");
const { Console } = require("console");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function mainMenu(){

    console.log("Factorial Application");

    console.log ("1. Say hello ");
    console.log ("2. Compute Factorial ");
    console.log ("3. Exit ");

rl.question("Enter your choice (1-3)",choice=> {

    if (choice==="1"){
        console.log("Hello there");
        backToMenu();
    }else if (choice==="2"){
        computeFactorial();
        backToMenu();
    }else if (choice==="3"){
        Console.log("Exiting program... Goodbye");
        rl.close();
        
    }else{
        console.log("Invalid choice. please try again");
        mainMenu();
    }

});

}

function computeFactorial() {
        rl.question("Enter a number for fatorial: ", (numStr) =>{
            let num = parseInt(numStr);
            try {
            num = parseInt(numStr);
                console.log ('Factorial of ${num} = ${MathUtils.computeFactorial(n)}');
        } catch (err){
                console.log(err.message);
        }
        
            backToMenu();
            
        });
    }

    function backToMenu(){
    }
      
mainMenu();