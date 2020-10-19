$(document).ready(function(){
    consultaAPI("pikachu")
    canvas()
    
    })
    
    $("button").click(function(){
        let pokemon = $("#input").val()
        consultaAPI(pokemon)
    })
    
    function consultaAPI(nombrePokemon) {
        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`,
            success: function (data) {
                console.log(data)
                $("#pokemon").html(data.name)
                let tipo = data.types[0].type
                console.log(tipo.name)
                $("#pokemonTipo").html(data.types)  // trae tipo de pokemon

                let habilidades = data.abilities[0].ability
                console.log(habilidades.name)   // trae habilidades 

                let hp = data.stats[0].base_stat
                let defensa = data.stats[2].base_stat
                let ataque =  data.stats[1].base_stat
                let ataqueEspecial =  data.stats[3].base_stat
                let defensaEspecial =  data.stats[4].base_stat
                let speed =  data.stats[5].base_stat
                
              //  let proximoPokemon = nombrePokemon++
                $("#imagen").html(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${nombrePokemon}.svg" alt="Imagen de Pokemon">`)
             //   $("#proximaImagen").html(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${proximoPokemon}.svg" alt="Imagen de Pokemon">`)
                canvas(hp,defensa,ataque,ataqueEspecial,defensaEspecial,speed)
                console.log(nombrePokemon)
            },
            dataType: 'json'
        });
    }
    
 
    
    // Canvas
    

    function canvas(hp,defensa,ataque,ataqueEspecial,defensaEspecial,speed){
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "", // "light1", "light2", "dark1"
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Habilidades"
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


    // function imagenes(){

    // }
    

// parir con imagen por inicio
// no incrementa el cambio de imagen en lado derecho

    
    