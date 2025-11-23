(function startquiz() {
    const Time_Limit = 20;

    const questions = [
        {
            question: "What is the correct way to write a comment in JavaScript?",
            options: ["A) <!-- comment --> ", "B) /* comment */", "C) // comment"," D) Both B and C"],
            answer: "D",
            
        },
        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            options: ["A) var ", "B) let ", "C) const ", "D) All of the above "],
            answer: "D",
            
        },
        {
            question: "What is the output of: console.log(typeof "Hello")?",
            options: ["A) string ", "B) "string" ", "C) text ", "D) "text" ],
            answer: "A",
            
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            options: ["A) = ", "B) == ", "C) === ", "D) := "],
            answer: "A",
            
        },
        {
            question: "What is the output of: console.log(2 + "2")?",
            options: ["A) 4 ","B) 22 ", "C) NaN ", "D) Error "],
            answer: "B",
            
        },
        {
            question: "Which method is used to print data to the browser console?",
            options: ["A) print() ","B)console.print() ", "C) console.log() ", "D) document.log() "],
            answer: "C",
        
        },
        {
            question: "What does == compare in JavaScript?",
            options: ["A) Value only ","B)Value and type  ", "C) Type only  ", "D) Nothing  "],
            answer: "A",
            
        },
        {
            question: "Which of the following is NOT a JavaScript data type?",
            options: ["A) String ","B)Boolean  ", "C) Number ", "D) Character "],
            answer: "D",
            
        },
        {
            question: " Which function converts a string to an integer?",
            options: ["A) parseInt() ","B) integer() ", "C) toInt() ", "D) number() "],
            answer: "A",
            
        }
    ]
    let score = 0;

    alert(
        `🎮Welcome to the JavaScript Console Quiz 🎮!!
        ⌚ You have ${Time_Limit} seconds per question.
        \n\n Press OK to start!`
    );

    for (let i = 0; i< questions.length; i++) {
        const q = questions[i];
        let questionText = `
        Question ${i + 1}: ${q.question}
        \n${q.options.join("")}
        Type A, B, C, or D:
        (You have ${Time_Limit} seconds)`;
        let start_time = Date.now();
        let user_answer = prompt(questionText);
        let time_taken = (Date.now() - start_time)/1000;

    if (user_answer === null) {
        alert("Quiz cancelled! ❌");
        return;
    }
    
    user_answer= user_answer.trim().toLowerCase();

    if (time_taken>Time_Limit) {
        alert(`⌛Time is up! You took ${time_taken.toFixed(1)} seconds. \n Correct answer: ${q.answer.toUpperCase()}`);
        continue;
    }
    if (user_answer === q.answer) {
        score++;
        alert(`✅Correct!! \n Time: ${time_taken.toFixed(1)}s`);
    }
    else {
        alert(`❌Incorrect.\nHint: ${q.hint}\nCorrect answer: ${q.answer.toUpperCase()}`);
    }
    }

    var final_message = "🎯 Quiz Finished!\n";
    final_message += "Your Score: " + score + " / " + questions.length + "\n";

    if (score === questions.length) {
    final_message += "🔥 Perfect score!";
    } else if (score > questions.length / 2) {
    final_message += "👏 Great job!";
    } else {
    final_message += "📘 Keep practicing!";
    }

    alert(final_message)

    const restart = confirm("Do you want play again?");
    if (restart) {
        startquiz();
    }
    else {
        alert("Thanks for playing!❤️");
    }
})();