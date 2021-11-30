import fetchCocktails from "./data.js";

const searchEl = document.getElementById("search");
const container = document.querySelector(".container");

window.addEventListener("load", () => {
  fetchDrinks("a");
});

searchEl.addEventListener("input", () => {
  fetchDrinks(searchEl.value);
});

async function fetchDrinks(drink) {
  container.children[0].innerHTML = "";
  let drinkName = await fetchCocktails(drink);
  newCard(drinkName.drinks);
}

function newCard(drinks) {
  const cards = drinks
    .map((drink) => {
      const { strDrinkThumb, strDrink } = drink;
      return `<article class="article col-4">
             <div class="card">
                 <img src="${strDrinkThumb}" class="card-img-top" alt="${strDrink}" />
                 <div class="card-body">
                   <h5 class="card-title">${strDrink}</h5>
                   
                 </div>
               </div>
             </article>`;
    })
    .join("");
  const row = container.querySelector(".row");
  row.innerHTML = cards;
  const drink = row.querySelectorAll(".article");
  drink.forEach((card, index) => {
    card.addEventListener("click", () => {
      console.log(drinks[index]);
      const clickedDrink = drinks[index];
      const usp = new URLSearchParams(clickedDrink);
      window.location.href = `drink.html?${usp}`;
    });
  });
}
