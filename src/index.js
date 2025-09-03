function recipeGenerator(event) {
  event.preventDefault();
  //alert("Generating");
  let recipeElement = document.querySelector(".answerRecipe");
  recipeElement.innerHTML = "Recipe for...";
  new Typewriter(".answerRecipe", {
    strings: "Recipe for...",
    autoStart: true,
    cursor: "",
  });
}

let recipeRequestElement = document.querySelector("form");
recipeRequestElement.addEventListener("submit", recipeGenerator);
