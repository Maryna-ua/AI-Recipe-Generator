function displayRecipe(response) {
  console.log(response.data);
  //console.log("generating...");

  new Typewriter(".answerRecipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  //console.log(response.data.answer);
}

function recipeGenerator(event) {
  event.preventDefault();
  console.log("seeking for the best option");

  let recipeElement = document.querySelector("#dish");
  //recipeElement.innerHTML = response.data.answer;
  let apiKey = "eo4f0aebct40cce30f501943d80f2bba";
  let prompt = `Share the best recipe of the ${recipeElement.value} and write it in amount under 1500 symbols`;
  let context =
    "You are an experienced cook, who teaches to cook easy and delicious dishes";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);

  let answerElement = document.querySelector(".answerRecipe");
  answerElement.classList.remove("hidden");
  //answerElement.innerHTML = `Generating the best ${recipeElement.value} recipe for you...`;

  new Typewriter(".answerRecipe", {
    strings: `Generating the best ${recipeElement.value} recipe for you...`,
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

let recipeRequestElement = document.querySelector("#recipe-form");
recipeRequestElement.addEventListener("submit", recipeGenerator);
