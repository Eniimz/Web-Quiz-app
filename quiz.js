/*const question = document.querySelector(".question-statement p");
const all_choices = document.querySelectorAll(".choices p");
const next_btn = document.querySelector(".next-btn");
const white_box = document.querySelector(".container")


let index = 0;



function showquestion() {

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

//while (index < questions.length){


let flag = 0;
let is_correct_ans_clicked = false;

showquestion();

all_choices.forEach((choice_selected) => {

   choice_selected.addEventListener("click", () => {

        let filtered_array = questions[index].possible_answers.filter((possible_answer) => {

            //console.log("choice_selected: " + choice_selected.innerHTML);
            //console.log("possible_answer.text: " + possible_answer.text);
            
            return possible_answer.text === choice_selected.innerHTML || possible_answer.correct === "true";
   
        })

        console.log(filtered_array);
        //console.log(filtered_array[0].text);

        filtered_array_wrong_answer = filtered_array.filter((filtered) => {
            return filtered.correct == "false";
        })

        console.log(filtered_array_wrong_answer);

        filtered_array_correct_answer = filtered_array.filter((filtered) => {
            return filtered.correct == "true";
        })

        console.log(filtered_array_correct_answer);

        if (filtered_array_wrong_answer.length != 0)
        {
            if (filtered_array_wrong_answer[0].text === choice_selected.innerHTML)
            {
               flag = 1;
               is_correct_ans_clicked = true;
               choice_selected.classList.add("wrong-answer"); 
                

            }
        }

     
        if (filtered_array_correct_answer[0].text === choice_selected.innerHTML)
        {
            flag = 1;
            
            choice_selected.classList.add("correct-answer"); 

        }

        

        console.log("choice selected: " + choice_selected.innerHTML);

        all_choices.forEach((choice_here) => {
            questions[index].possible_answers.forEach((possible_answer) => {
                if ((is_correct_ans_clicked == true) && (possible_answer.text == choice_here.innerHTML && possible_answer.correct === "true"))
                {
                    console.log("correct ans: " + choice_here.innerHTML);
                    choice_here.classList.add("correct-answer"); 
                }
            })
        })


        if (flag == 1)
        {
            white_box.classList.add(".increase-height");
            next_btn.style.display = "block";
        }

        next_btn.addEventListener("click", () => {
            index++;
        })
        
        
    })

    

     
    //console.log("choice_selected.innerHTML: " + choice_selected.innerHTML);
    //console.log("questions[index].possible_answers.text: " + questions[index].possible_answers.text);

    
    

}) 





//}


*/