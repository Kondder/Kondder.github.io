  // Definición de las funciones para los horarios
  function generarHorariosRivadaviaDiaSemana() {
    return [
      "5:50", "6:20", "7:00", "7:40", "8:25", "9:05", "9:45", "10:55", "11:40", "12:20", "13:00", 
      "13:40", "14:25", "14:55", "15:35", "16:15", "16:55", "17:35", "18:15", "18:55", "19:35", 
      "20:15", "20:45", "21:30"
    ];
  }

  function generarHorariosRivadaviaSabado() {
    return [
      "7:00", "7:40", "10:20", "11:00", "15:00", "15:40", "17:40", "19:00", "20:30", "21:30"
    ];
  }

  function generarHorariosRivadaviaDomingoFeriado() {
    return [
      "15:00", "15:40", "17:40", "19:00", "20:30", "21:30" 
    ];
  }

  function generarHorariosMendozaDiaSemana() {
    return [
      "7:20", "8:00", "8:40", "9:20", "10:05", "10:40", "11:25", "12:10", "12:50",  
      "13:30", "14:10", "14:50", "15:30", "16:10", "16:50", "17:30", "18:10",  
      "18:50", "19:30", "20:10", "20:50", "21:30", "22:05", "22:50"
    ];
  }

  function generarHorariosMendozaSabado() {
    return [
      "8:30", "9:15", "12:30", "13:15", "16:25", "17:10", "19:00", "20:25", "21:50", "22:50"
    ];
  }

  function generarHorariosMendozaDomingoFeriado() {
    return [
      "16:25", "17:10", "19:00", "20:25", "21:50", "22:50"
    ];
  }

  // Generar las tablas
  function generarTablas() {
    const rivadaviaDiaSemana = generarHorariosRivadaviaDiaSemana().join('<br>');
    const rivadaviaSabado = generarHorariosRivadaviaSabado().join('<br>');
    const rivadaviaDomingoFeriado = generarHorariosRivadaviaDomingoFeriado().join('<br>');
    const mendozaDiaSemana = generarHorariosMendozaDiaSemana().join('<br>');
    const mendozaSabado = generarHorariosMendozaSabado().join('<br>');
    const mendozaDomingoFeriado = generarHorariosMendozaDomingoFeriado().join('<br>');

    document.getElementById('rivadavia-dia-semana').innerHTML = rivadaviaDiaSemana;
    document.getElementById('rivadavia-sabado').innerHTML = rivadaviaSabado;
    document.getElementById('rivadavia-domingo-feriado').innerHTML = rivadaviaDomingoFeriado;

    document.getElementById('mendoza-dia-semana').innerHTML = mendozaDiaSemana;
    document.getElementById('mendoza-sabado').innerHTML = mendozaSabado;
    document.getElementById('mendoza-domingo-feriado').innerHTML = mendozaDomingoFeriado;
  }

  // Ejecutar la función para generar las tablas al cargar la página
  generarTablas();