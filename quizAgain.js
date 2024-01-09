const question = document.querySelector(".question-statement p");
const all_choices = document.querySelectorAll(".choices p");
const next_btn = document.querySelector(".next-btn");
const white_box = document.querySelector(".container")

let index = 0;
let score = 0;

//showing question func

function showquestion() {

    console.log('index: ' + index);
    let shown_question = questions[index].question;
    let questionNo = index + 1;
    question.innerHTML = questionNo + ". " + shown_question;
    
    //changing the answer choices respectively for the respective question

    all_choices.forEach((choice_el, index_choices) => {

    questions[index].possible_answers.forEach((possible_answer, index_possible) => {

     if (index_choices === index_possible)
    {
        choice_el.innerHTML = possible_answer.text;

    }           

})

})
 
}


function check_answer(selected_choice) {
    //filtering correct and wrong answer by .filter array method
    let filtered_array = questions[index].possible_answers.filter((possible_answer) => {

            return possible_answer.text === selected_choice.innerHTML || possible_answer.correct === "true";
   
        })
        //filtering wrong answer by .filter array method
        filtered_array_wrong_answer = filtered_array.filter((filtered) => {
            return filtered.correct == "false";
        })
        //filtering correct answer by .filter array method
        filtered_array_correct_answer = filtered_array.filter((filtered) => {
            return filtered.correct == "true";
        })

        //doing this so it doesnt read the statement which can be called as undefined
        if (filtered_array_wrong_answer.length != 0)
        {
            if (filtered_array_wrong_answer[0].text === selected_choice.innerHTML)
            {
               flag = 1;
               is_correct_ans_clicked = true;
               selected_choice.classList.add("wrong-answer"); //bg - red
               return false;
                

            }
        }

     
        if (filtered_array_correct_answer[0].text === selected_choice.innerHTML)
        {
            flag = 1;
            selected_choice.classList.add("correct-answer"); // bg - green
            score++;
            return true;

        }
     
}

function handleChoiceClick(selected_choice) {

        if (check_answer(selected_choice))
        {
            white_box.classList.add(".increase-height");
            next_btn.style.display = "block";
        }
        else
        {
            white_box.classList.add(".increase-height");
            next_btn.style.display = "block";

            //for green background of the correct answer when wrong answer is clicked
            all_choices.forEach((choice_here) => {
                questions[index].possible_answers.forEach((possible_answer) => {
                    if ((possible_answer.text == choice_here.innerHTML && possible_answer.correct === "true"))
                    {
                        //console.log("correct ans: " + choice_here.innerHTML);
                        choice_here.classList.add("correct-answer"); 
                    }
                })
            })


        }

}


all_choices.forEach((choice_selected) => {
 
    choice_selected.addEventListener("click", () => {
        handleChoiceClick(choice_selected);
        
    })
    
    
})
console.log("next btn clicked: " + index);

    next_btn.addEventListener("click", () => {

        all_choices.forEach((choice_selected) => {
            choice_selected.classList.remove("correct-answer");
            choice_selected.classList.remove("wrong-answer");
        })

        
        index++;
        console.log("next btn clicked: " + index);
        next_btn.style.display = "none";
        //console.log(index);
        if (index < questions.length)
        {
            showquestion();
        }
        else
        {

            let question_div = document.querySelector(".question-statement");
            let choices_div = document.querySelector(".choices");

            question_div.style.display = "none";
            choices_div.style.display = "none";

            let score_sentence = document.createElement("p");
            score_sentence.classList.add("final-score");
            score_sentence.innerHTML = `You scored ${score} out of ${questions.length}!`;
            white_box.appendChild(score_sentence);


            let play_again_btn = document.createElement("button");
            play_again_btn.innerHTML = "Play Again";
            play_again_btn.classList.add("play-again-btn");
            white_box.appendChild(play_again_btn);


            play_again_btn.addEventListener("click", () => {

                index = 0;
                score = 0;
                question_div.style.display = "block";
                choices_div.style.display = "block";
                score_sentence.remove();
                play_again_btn.remove();
                showquestion();
            })
            
        }

    })




showquestion();