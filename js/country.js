const laodMeals = (mealName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data))
    .catch((err) => {
      console.log("Server is busy now");
    });
};

// INput Select
const input = document.querySelector(".search-input");
const searchItem = () => {
  laodMeals(input.value);
  input.value = "";
};

const displayMeals = (meals) => {
  const items = document.getElementById("items");
  items.innerHTML = `
  ${meals.meals
    .map((meal) => {
      console.log(meal);
      return `
      <div class="card h-100">
      <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${meal.strArea}</h5>
      <p class="card-text">
        ${meal.strInstructions.slice(0, 120)}
      </p>
    </div>
  </div>
  </div>`;
    })
    .join("")}
  `;
};

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.querySelector(".search-button").click();
  }
});
