 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. Protein aggregation is aggregation of :", ///// Write the question inside double quotes
            answers: {
                a: "proteins and solvent molecules", ///// Write the option 1 inside double quotes
                b: "proteins and legands", ///// Write the option 2 inside double quotes
	        c: "folded proteins", ///// Write the option 1 inside double quotes
                d: "misfolded proteins", ///// Write the option 2 inside double quotes
		
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
     },


	{
            question: "2. Prerequisite of protein aggregation is : ", ///// Write the question inside double quotes
            answers: {
                a: "Mutation.", ///// Write the option 1 inside double quotes
                b: "Protein folding.", ///// Write the option 2 inside double quotes
	        c: "Protein denaturation.", ///// Write the option 1 inside double quotes
                d: "None of the above.", ///// Write the option 2 inside double quotes
		
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },



	{
            question: "3. Why CD spectroscopy is a convenient technique to study protein aggregation? ", ///// Write the question inside double quotes
            answers: {
                a: "CD spectra of folded and random coil are similar.", ///// Write the option 1 inside double quotes
                b: "CD spectra of folded and random coil are quite different.", ///// Write the option 2 inside double quotes
	        c: "In the aggregated state the spectra is absent in CD.", ///// Write the option 1 inside double quotes
                d: "In the folded state the spectra is absent in CD.", ///// Write the option 2 inside double quotes
		
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },		  



	{
            question: "4. Dynode voltage gives the indication of : ", ///// Write the question inside double quotes
            answers: {
                a: "Reflection of light", ///// Write the option 1 inside double quotes
                b: "Absorption of light.", ///// Write the option 2 inside double quotes
	        c: "Emmision of light.", ///// Write the option 1 inside double quotes
                d: "Refraction of light.", ///// Write the option 2 inside double quotes
		
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },



	{
            question: "5. What happens when the protein aggregates? ", ///// Write the question inside double quotes
            answers: {
                a: "Its size increases and more light is scattered.", ///// Write the option 1 inside double quotes
                b: "Its size decreases and less amount of light is scattered.", ///// Write the option 2 inside double quotes
	        c: "Its size increases and less amount of light is scattered.", ///// Write the option 1 inside double quotes
                d: "Its size decreases and more light is scattered.", ///// Write the option 2 inside double quotes
		
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },


     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
