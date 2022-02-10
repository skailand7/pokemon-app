console.log("Hola");

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const items = [];
const container = document.querySelector("#container");
const count = 3;
const badge =
  "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none ";
window
  .fetch(`${baseUrl}?offset=151&limit=100`)
  .then((respuesta) => respuesta.json())
  .then((responseJson) => {
    responseJson.results.forEach((element) => {
      const pokemonIndex =
        element.url.split("/")[element.url.split("/").length - 2];

      const urlPoke = `${baseUrl}${pokemonIndex}`;

      const contain = document.createElement("div");
      contain.className = "card-contain";

      const imagePokemon = document.createElement("img");
      imagePokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${pokemonIndex}.png`;
      //imagePokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/${pokemonIndex}.png`;

      const imgContain = document.createElement("div");
      imgContain.className = "imgCard";
      imgContain.appendChild(imagePokemon);

      const nameContainer = document.createElement("div");
      const name = document.createElement("h3");
      name.textContent = element.name.toUpperCase();
      nameContainer.classList = "nameContainer";
      nameContainer.appendChild(name);
      const typeContainer = document.createElement("div");
      window
        .fetch(urlPoke)
        .then((respuesta) => respuesta.json())
        .then((responseJson2) => {
          responseJson2.types.forEach((element) => {
            const type1 = document.createElement("span");
            const background1 = document.querySelector(".card-container");
            switch (element.type.name) {
              case "normal":
                type1.className = `${badge}red-yellow-100 bg-red-300 rounded`;

                break;
              case "fighting":
                type1.className = `${badge}text-red-100 bg-red-700 rounded`;
                break;
              case "flying":
                type1.className = `${badge}text-blue-100/50 bg-blue-300 rounded`;
                break;
              case "poison":
                type1.className = `${badge}text-purple-100 bg-purple-700 rounded`;
                break;
              case "ground":
                type1.className = `${badge}text-yellow-100 bg-yellow-900 rounded`;
                break;
              case "rock":
                type1.className = `${badge}text-yellow-100 bg-yellow-600 rounded`;
                break;
              case "bug":
                type1.className = `${badge}text-green-100 bg-green-400 rounded`;
                break;
              case "ghost":
                type1.className = `${badge}text-purple-100 bg-purple-900 rounded`;
                break;
              case "steel":
                type1.className = `${badge}text-gray-100 bg-gray-700 rounded`;
                break;
              case "fire":
                type1.className = `${badge}text-red-100 bg-red-600 rounded`;
                break;
              case "water":
                type1.className = `${badge}text-blue-100 bg-blue-700 rounded`;
                break;
              case "grass":
                type1.className = `${badge}text-green-100 bg-green-700 rounded`;
                contain.style =
                  "background: url('https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/9/92/Type_Background_Grass.png/')";
                break;
              case "electric":
                type1.className = `${badge}text-yellow-100 bg-yellow-400 rounded`;
                break;
              case "psychic":
                type1.className = `${badge}text-pink-100 bg-pink-500 rounded`;
                break;
              case "ice":
                type1.className = `${badge}text-blue-100 bg-blue-400 rounded`;
                break;
              case "dragon":
                type1.className = `${badge}text-blue-100 bg-blue-800 rounded`;
                break;
              case "dark":
                type1.className = `${badge}text-gray-100 bg-gray-700 rounded`;
                break;
              case "fairy":
                type1.className = `${badge}text-pink-100 bg-pink-300 rounded`;
                break;
              default:
              // code block
            }

            type1.textContent = element.type.name;

            typeContainer.appendChild(type1);
            typeContainer.className = "typeContainer";
            nameContainer.appendChild(typeContainer);
          });
        });

      contain.append(nameContainer, imgContain);
      items.push(contain);
    });

    container.append(...items);
  });
