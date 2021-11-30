const fetchCocktails = async (drink) => {
  const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
  const data = response.json();
  return data;
};
export default fetchCocktails;
