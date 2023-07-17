  // Definición de las funciones para los horarios
  function generarHorariosRivadaviaDiaSemana() {
    return [
      '5:50', '6:20', '7:00', '7:40', '8:25', '9:05', '9:45', '11:00',
      '11:40', '12:30', '13:40', '14:55', '15:45', '16:25', '17:30',
      '18:30', '19:30', '20:30', '21:30'
    ];
  }

  function generarHorariosRivadaviaSabado() {
    return [
      '7:00', '7:40', '10:20', '11:00', '15:00', '15:40', '17:40',
      '19:00', '20:30', '21:35'
    ];
  }

  function generarHorariosRivadaviaDomingoFeriado() {
    return [
      '15:00', '15:48', '17:46', '19:00', '20:30', '21:30'
    ];
  }

  function generarHorariosMendozaDiaSemana() {
    return [
      '7:15', '7:55', '8:35', '9:20', '9:40', '10:20', '11:05',
      '12:15', '13:00', '13:45', '15:00', '16:20', '17:05',
      '17:45', '19:00', '19:45', '21:00', '21:50'
    ];
  }

  function generarHorariosMendozaSabado() {
    return [
      '8:30', '9:15', '12:30', '13:15', '16:25', '17:10',
      '19:00', '20:25', '21:50', '22:50'
    ];
  }

  function generarHorariosMendozaDomingoFeriado() {
    return [
      '16:25', '17:10', '19:00', '20:25', '21:50', '22:50'
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