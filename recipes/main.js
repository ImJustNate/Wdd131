import recipes from './recipes.mjs';

function RandomNum(num){
    return Math.floor(Math.random() * num)
}

function RandomRecipe(list){
	const randomNum = RandomNum(list.length);

	return list[randomNum];
}

function ReturnTags(tags) {
    return tags.map(tag => `<button>${tag}</button>`).join('');
}



function ReturnStars(num){
    const newSection = document.createElement("section");
    if (num == 5){
        newSection.innerHTML = `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>`
    }
    else if (num == 4){
        newSection.innerHTML = `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
    else if (num == 3){
        newSection.innerHTML = `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
    else if (num == 2){
        newSection.innerHTML = `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
    if (num == 1){
        newSection.innerHTML = `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
    return newSection
}

function htmlTemplate(item){
        return `<section class="recipeCard">
            <img src="${item.image}" alt="Image of ${item.name} on a plate">
            <div>
            ${ReturnTags(item.tags)}
            <h2>${item.name}</h2>
            <section>
                <span
                    class="rating"
                    role="img"
                    aria-label="Rating: ${item.rating} out of 5 stars"
                >
                ${ReturnStars(item.rating)}
                </span>
            </section>
            <p>
            ${item.description}
            </p>
            </div>
        </section>`;
    
}
console.log(ReturnTags(['dessert', 'German']))
console.log(recipes[0].tags)
console.log(htmlTemplate(RandomRecipe(recipes)))

function renderRecipes(recipeList) {
	// get the element we will output the recipes into

        const outputElement = document.getElementsByName('main');
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
        const recipesHTML = recipeList.map(htmlTemplate).join('');
	// Set the HTML strings as the innerHTML of our output element.
        outputElement.innerHTML = recipesHTML;

}

function init() {
  // get a random recipe
  const recipe = RandomRecipe(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

// document.body.appendChild(htmlTemplate(RandomRecipe(recipes)));


console.log(RandomRecipe(recipes))
