$(document).ready(function() {
    $('#consultar').click(function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        
        var url = 'https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=Liverpool_vs_Newcastle&s=2012-2013';

        console.log("URL de la solicitud:", url); // Imprimir la URL de la solicitud en la consola
        
        // Realizamos la solicitud a la API
        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                console.log("Respuesta de la API:", data); // Imprimir la respuesta de la API en la consola
                
                // Manejamos la respuesta de la API
                if (data.event && data.event.length > 0) {
                    var resultado = data.event[0];
                    var html = '<h2>Resultado</h2>' +
                               '<p><strong>Equipo Local:</strong> ' + resultado.strHomeTeam + '</p>' +
                               '<p><strong>Equipo Visitante:</strong> ' + resultado.strAwayTeam + '</p>' +
                               '<p><strong>Puntuación Local:</strong> ' + resultado.intHomeScore + '</p>' +
                               '<p><strong>Puntuación Visitante:</strong> ' + resultado.intAwayScore + '</p>' +
                               '<p><strong>Fecha del evento:</strong> ' + resultado.dateEvent + '</p>';

                    $('#resultado').html(html);
                } else {
                    $('#resultado').html('<p>No se encontraron resultados para la temporada seleccionada.</p>');
                }
            },
            error: function(xhr, status, error) {
                console.error("Error en la solicitud:", error); // Imprimir errores en la consola
                $('#resultado').html('<p>Error al cargar los datos. Por favor, inténtalo de nuevo más tarde.</p>');
            }
        });
    });
});
