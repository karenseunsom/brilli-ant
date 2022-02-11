document.addEventListener('click', (event) => {
    if (event.target.className == 'index-card') {
        let clickedCategoryJSON = localStorage.getItem('clickedCategory');
        let clickedCategory = JSON.parse(clickedCategoryJSON);
        if (clickedCategory == null) {
            clickedCategory = []
        }
        clickedCategory.splice(0, 1, event.target.dataset.name)
        clickedCategoryJSON = JSON.stringify(clickedCategory)
        localStorage.setItem('clickedCategory', clickedCategoryJSON)

    }
})