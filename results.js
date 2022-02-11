let clickedCategoryJSON = localStorage.getItem('clickedCategory');
let clickedCategory = JSON.parse(clickedCategoryJSON);

let clickedNumberJSON = localStorage.getItem('clickedNumber');
let clickedNumber = JSON.parse(clickedNumberJSON);

let topic = document.getElementById('topic');
let stringCategory = clickedCategory.toString();
let answer = document.getElementById('answer');
let nextButton = document.getElementById('arrow-container')

topic.textContent = categories[stringCategory][0].question
answer.textContent = categories[stringCategory][0].answer

nextButton.addEventListener('click', () => {


})
