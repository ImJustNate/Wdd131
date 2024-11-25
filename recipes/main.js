
import recipes from './recipes.mjs';

function RandomNum(num) {
    return Math.floor(Math.random() * num);
}

function RandomRecipe(list) {
    const randomNum = RandomNum(list.length);
    return list[randomNum];
}

function ReturnTags(tags) {
    return tags.map(tag => `<button>${tag}</button>`).join('');
}

function ReturnStars(num) {
    if (num >= 5) {
        return `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>`;
    } else if (num >= 4) {
        return `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>`;
    } else if (num >= 3) {
        return `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>`;
    } else if (num >= 2) {
        return `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>`;
    } else if (num >= 1) {
        return `
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
}

function htmlTemplate(item) {
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
            <p>${item.description}</p>
        </div>
    </section>`;
}

function appendBookCards(item) {

    
    const titleElement = document.getElementById("here");
    titleElement.innerHTML = htmlTemplate(item);

    // const newSection = document.getElementsByClassName("recipeCard");
    // newSection.innerHTML = htmlTemplate(item);
    // document.body.appendChild(newSection);
}

const randomRecipe = RandomRecipe(recipes);
appendBookCards(randomRecipe);

