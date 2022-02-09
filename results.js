document.addEventListener('DOMContentLoaded', () => {
    let clickedCategoryJSON = localStorage.getItem('clickedCategory');
    let clickedCategory = JSON.parse(clickedCategoryJSON);

    let topic = document.getElementById('topic');
    let stringCategory = clickedCategory.toString();

    console.log(topic)
    topic.textContent = categories[stringCategory][0].question
    
})