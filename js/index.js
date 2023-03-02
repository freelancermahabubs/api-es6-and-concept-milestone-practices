const loadPopularDrinks = async(searchText) =>{
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
  try{
    const res = await fetch(url)
    const data = await res.json();
    displayPopularDrinks(data.drinks)
  }
  catch(error){
    console.log(error);
  };
};
const displayPopularDrinks = (drinks) => {
const popularDrinksContainer = document.getElementById('popular-drinks');
popularDrinksContainer.textContent = '';

const noFoundDrinks = document.getElementById('no-found-messages')
if(drinks.length === 0){
  noFoundDrinks.classList.remove('d-none')
}
else{
  noFoundDrinks.classList.add('d-none')
}

drinks.slice(0, 8).forEach(drink =>{
  // console.log(drink)
  const div = document.createElement('div');
  div.classList.add('col')
  div.innerHTML = ` 
  <div class="card">
  <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
    <h5 class="card-title text-center">${drink.strDrink}</h5>

</div>
</div>
  `;
  popularDrinksContainer.appendChild(div)
})
};


const loadPopularIngredients = async(searchText) =>{
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
  try{
    const res = await fetch(url)
    const data = await res.json();
    displayPopularIngredients(data.drinks)
  }
  catch(error){
    console.log(error);
  };
};


const displayPopularIngredients = (ingredients) => {
const popularIngredientsContainer = document.getElementById('popular-ingredients');
popularIngredientsContainer.textContent = '';
ingredients.slice(0, 4).forEach(ingredient =>{
  // console.log(ingredient)
  const div = document.createElement('div');
  div.classList.add('col')
  div.innerHTML = ` 
  <div class="card">
  <img src="${ingredient.strDrinkThumb}" class="card-img-top" alt="...">
    <h5 class="card-title text-center">${ingredient.strDrink}</h5>

</div>
</div>
  `;
  popularIngredientsContainer.appendChild(div)
})
};


const loadLatestDrinks = async(searchText) =>{
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
  try{
    const res = await fetch(url)
    const data = await res.json();
    displayLatestDrinks(data.drinks)
  }
  catch(error){
    console.log(error);
  };
};


const displayLatestDrinks = (latestDrinks) => {
const latestDrinksContainer = document.getElementById('latestDrinks');
latestDrinksContainer.textContent = '';
latestDrinks.slice(1, 20).forEach(latestDrink =>{
  // console.log(ingredient)
  const div = document.createElement('div');
  div.classList.add('col')
  div.innerHTML = ` 
  <div class="card">
  <img src="${latestDrink.strDrinkThumb}" class="card-img-top" alt="...">
    <h5 class="card-title text-center">${latestDrink.strDrink}</h5>

</div>
</div>
  `;
  latestDrinksContainer.appendChild(div)
})
};


document.getElementById('search-btn').addEventListener('click', function(){
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value = '';
  // console.log(searchText)
  loadPopularDrinks(searchText)
  loadPopularIngredients(searchText)
});

// loadPopularIngredients()

loadPopularDrinks('adam', 'Tommys');

loadPopularIngredients('Margarita');
loadLatestDrinks()
