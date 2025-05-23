$(document).ready(function() {
  const totalPokemons = 168;
  const tbody = $('#pokemon-table-body');

  for (let i = 1; i <= totalPokemons; i++) {
    $.get(`https://pokeapi.co/api/v2/pokemon/${i}`, function(pokemon) {
      $.get(pokemon.species.url, function(species) {
        const linha = `
          <tr>
            <td>${pokemon.id}</td>
            <td>${pokemon.name}</td>
            <td><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon-img"></td>
            <td>${pokemon.height}</td>
            <td>${pokemon.weight}</td>
          </tr>
        `;
        tbody.append(linha);
      });
    });
  }
});
