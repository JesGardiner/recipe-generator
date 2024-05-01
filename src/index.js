function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "171b7dtao42cf84308ef17ccf77309a5";
  let context =
    "You are a food recipe AI assistant who is able to give food recipe suggestions using whatever the user suggests they feel like. Ensure that each new recipe you give includes a <h3> of 'Ingredints' and 'Method'. Ensure that the ingredients are listed using the <li> element before including a seperate list of instructions for the cooking under the 'Method' <h3>. Also ensure that the method is given as a list with each new instruction given as an <li> and <br>";
  let prompt = `User instructions: Generate a recipe using the ingredient given in ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector ("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);