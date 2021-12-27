const fetchCocktails = async (drink) => {
  const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
  const data = await response.json();
  return data;
};

export const drinksById = async (id) => {
  const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  return data;
};
// console.log(await drinksById("11007"));

export default fetchCocktails;
