let answerOptions = document.querySelector(".answer-options");
let nextQuestionBtn = document.querySelector(".next-question-btn");

let quizCategory = "Programming";
let currentQuestion = null;
const questionIndexHistory = [];

// Fetch a random Question from based on the selected Category
const getRandomQuestion = function(){
	const categoryQuestions = questions.find(function(cat){
		return cat.category.toLowerCase() === quizCategory.toLowerCase();
	}).questions || [];

	// Filter out already asked questions and choose a random one
	const availableQuestion = categoryQuestions.filter((_, index) => !questionIndexHistory.includes(index));
	const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
	questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
	return randomQuestion;
}


// Hightlight the correct answer option 
const highlightCorrectAnswer = () => {
	const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
	correctOption.classList.add("correct");
	const iconHTML = `<span class="material-symbols-outlined">check_circle</span>`;
	correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

// Handle the user's answer selection
const handleAnswer = (option, answerIndex) => {
	const isCorrect = currentQuestion.correctAnswer === answerIndex;
	option.classList.add(isCorrect ? 'correct' : 'incorrect');
	!isCorrect ? highlightCorrectAnswer() : "";

	// Insert icon based on correctness
	const iconHTML = `<span class="material-symbols-outlined">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
	option.insertAdjacentHTML("beforeend", iconHTML);

	// Disable all answer options after one option is seected
	answerOptions.querySelectorAll(".answer-option").forEach(function(option){
		option.style.pointerEvents = 'none';
	});

	nextQuestionBtn.style.visibility = "visible";
};


// Render the current question and its options in the quiz 
const randerQuestion = function(){
	currentQuestion = getRandomQuestion();
	if(!currentQuestion) return;
	console.log(currentQuestion);

	// Update the UI
	answerOptions.innerHTML = "";
	nextQuestionBtn.style.visibility = "hidden";
	document.querySelector(".question-text").textContent = currentQuestion.question;

	// Create Options <li> element and append them
	currentQuestion.options.forEach(function(option, index){
		const li = document.createElement("li");
		li.classList.add("answer-option");
		li.textContent = option;
		answerOptions.append(li);
		li.addEventListener("click", () => handleAnswer(li, index));
	});
};

randerQuestion();

nextQuestionBtn.addEventListener("click", randerQuestion);

