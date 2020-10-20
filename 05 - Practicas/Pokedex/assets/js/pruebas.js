$(document).ready(function(){
    $.ajax({
        url:'https://pokeapi.co/api/v2/pokemon/?limit=1050',
        success: function(respuesta) {
            respuesta.results.forEach(element => {
                $('#selector').append( ` <option value="${element.url}">${element.name}</option> ` 

                )
            })
        }
    })
})

$("#selector").change(function(){

    let selectorUrl = $('select[id=selector]').val()

    $.ajax({
        url: selectorUrl,
        success: function(respuesta) {
            $("#imagenPokemon").attr('src',respuesta.sprites.other["official-artwork"].front_default)
        }
    })
})






