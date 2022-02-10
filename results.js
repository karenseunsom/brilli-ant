let clickedCategoryJSON = localStorage.getItem('clickedCategory');
let clickedCategory = JSON.parse(clickedCategoryJSON);

let topic = document.getElementById('topic');
let stringCategory = clickedCategory.toString();
let answer = document.getElementById('answer');
console.log(answer)

topic.textContent = categories[stringCategory][0].question
answer.textContent = categories[stringCategory][0].answer
