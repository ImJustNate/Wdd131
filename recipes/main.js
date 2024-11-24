import recipes from './recipes.mjs';

function RandomNum(num){
    return Math.floor(Math.random() * num)
}

function RandomRecipe(list){
	const randomNum = RandomNum(list.length);

	return list[randomNum];
}

function ReturnTags(tags){
    const newSection = document.createElement("section");
    tags.forEach(tag => {
        const button = document.createElement("button");
        button.textContent = tag; // Safer than `innerHTML` for simple text
        newSection.appendChild(button);    
    });

    return newSection
}



function ReturnStars(num){
    const newSection = document.createElement("section");
    if (num = 5){
        newSection.innerHTML = `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>`
    }
    else if (num = 4){
        newSection.innerHTML = `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
    else if (num = 3){
        newSection.innerHTML = `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
    else if (num = 2){
        newSection.innerHTML = `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
    if (num = 1){
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
            ${ReturnTags(['dessert', 'German'])}
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
console.log(recipes[7].tags)
console.log(htmlTemplate(7))


// document.body.appendChild(htmlTemplate(RandomRecipe(recipes)));


console.log(RandomRecipe(recipes))
