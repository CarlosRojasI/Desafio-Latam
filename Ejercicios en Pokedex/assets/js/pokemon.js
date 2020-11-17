$(document).ready(function(){
    consultaAPI("pikachu")
    canvas()
    
    })
    
    $("button").click(function(){
        let pokemon = $("#input").val()
        consultaAPI(pokemon)
        var pokeConsulta = pokemon.toLowerCase()
        consultaAPI(pokeConsulta)
    })
    
    function consultaAPI(nombrePokemon) {
        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`,
            success: function (data) {
                $("#pokemon").html(data.name)
                let tipo = data.types[0].type
                let habilidades = data.abilities[0].ability
                let id = data.id
                let hp = data.stats[0].base_stat
                let defensa = data.stats[2].base_stat
                let ataque =  data.stats[1].base_stat
                let ataqueEspecial =  data.stats[3].base_stat
                let defensaEspecial =  data.stats[4].base_stat
                let speed =  data.stats[5].base_stat
                let peso = data.weight
                let altura = data.height * 10
                let imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
                let imagenProx = ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id+1}.svg`

                $("#pokemonArgu").html(`<p> ${tipo.name} </p>`)  // trae tipo de pokemon
                $("#pokemonArgu1").html(`<p> ${habilidades.name} </p>`)
                $("#imagen").html(`<img data-toggle="tooltip" data-placement="top" title="Click para ver estadisticas de pokémon anterior" style="cursor: pointer; max-height: 200px" onclick="consultaAPI(${id - 1})" src="${imagen}" width="100%" alt="Imagen de Pokemon">`)
               
               $("#talla").html(`<li><b>Velocidad: </b> ${altura} cms</li><li><b>Peso: </b> ${peso} kg</li><li><b>Altura: </b>${speed} km/h</li>`)

               $("#proximaImagen").html(`<img data-toggle="tooltip" data-placement="top" title="Click para ver estadisticas de pokémon anterior" style="cursor: pointer; max-height: 200px" onclick="consultaAPI(${id + 1})" src="${imagenProx}" width="100%" alt="Imagen de Pokemon">`)
                canvas(hp,defensa,ataque,ataqueEspecial,defensaEspecial,speed)
            },
                error:function () {
                  alert(`El dato ingresado "${nombrePokemon}" no es valido, favor ingrese un nombre correcto de pokémon o un numero menor a 893`  )

                },
 
            dataType: 'json'
        });
    }
    
 
    
    // Canvas
    

    function canvas(hp,defensa,ataque,ataqueEspecial,defensaEspecial,speed){
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark", // "light1", "light2", "dark1"
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: " "
        },
        axisX: {
          margin: 10,
          labelPlacement: "inside",
          tickPlacement: "inside"
        },
        axisY2: {
          title: "",
          titleFontSize: 14,
          includeZero: true,
          suffix: "pts"
        },
        data: [{
          type: "bar",
          axisYType: "secondary",
          yValueFormatString: "#,###.##",
          indexLabel: "{y}",
          dataPoints: [
            { label: " hp ", y: hp },
            { label: " defensa ", y: defensa },
            { label: " ataque ", y: ataque },
            { label: " defensa especial ", y: defensaEspecial },
            { label: " ataque especial ", y: ataqueEspecial },
            { label: " velocidad ", y: speed },
          ]
        }]
      });
      chart.render();
    }
