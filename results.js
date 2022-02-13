const clickedCategoryJSON = localStorage.getItem('clickedCategory');
const clickedCategory = JSON.parse(clickedCategoryJSON);
const stringCategory = clickedCategory.toString();

let currentQuestionIndex = 0;
const shuffledQuestions = categories[stringCategory].sort(() => Math.random() - .5)


const topic = document.getElementById('topic');
const answer = document.getElementById('answer');
const nextButton = document.getElementById('arrow-container')

topic.textContent = shuffledQuestions[currentQuestionIndex].question
answer.textContent = shuffledQuestions[currentQuestionIndex].answer

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    topic.textContent = shuffledQuestions[currentQuestionIndex].question
    answer.textContent = shuffledQuestions[currentQuestionIndex].answer
})
