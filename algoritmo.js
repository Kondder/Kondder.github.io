let now = Date.now();
let d = new Date(now);
let day = d.getDay(); //dia de hoy en un valor numerio
let hour = new Date().toLocaleTimeString("es-AR");  //hora de hoy
let hourDay, hourMin;

var hourNow = [parseInt(hour[0]+hour[1]), parseInt(hour[3]+hour[4])]


let weekdaysRivadavia = [
    '05:50', '06:20', '07:00', '07:40', '08:25', '09:05', '09:45', '11:00', '11:40', '12:30',
    '13:40', '14:55', '15:45', '16:25', '17:30', '18:30', '19:30', '20:30', '21:30'
];

let saturdayRivadavia = [
    '07:00', '07:40', '10:20', '11:00', '15:00', '15:40', '17:40', '19:00', '20:30', '21:35'
];

let sundayRivadavia = [
    '15:00', '15:48', '17:46', '19:00', '20:30', '21:30'
];

let weekdaysMendoza = [
    '07:15', '07:55', '08:35', '09:20', '9:40', '10:20', '11:05', '12:15', '13:00',
    '13:45', '15:00', '16:20', '17:05', '17:45', '19:00', '19:45', '21:00', '21:50'
];

let saturdayMendoza = [
    '08:30', '09:15', '12:30', '13:15', '16:25', '17:10', '19:00', '20:25', '21:50', '22:50'
];

let sundayMendoza = [
    '16:25', '17:10', '19:00', '20:25', '21:50', '22:50'
];

let Riva = [
    weekdaysRivadavia, saturdayRivadavia, sundayRivadavia
]

let Mza = [
    weekdaysMendoza, saturdayMendoza, sundayMendoza
];

function tiempoRestante(mH, mM, sH, sM){

    if(mM > sM){
        if(mH <= sH){
            return [Math.abs(sH-mH-1), Math.abs(60-mM+sM)];
        }
    }else if(mH <= sH){
        return [Math.abs(mH-sH),Math.abs(mM-sM)];
    }

}   
/*function proxima (hour,day){
    let minDay, hourDay;
    end = day.length - 1

    if((hour[0] > (day[end][0] + day[end][1])) && (hour[1] > (day[end][3] + day[end][4]))){
        return [-1,-1];
    }else{
        for (var i = 0; i <= end; i++){
            hourDay = parseInt( day[i][0] + day[i][1]);
            minDay = parseInt( day[i][3] + day[i][4]);

            if(hour[0] <= hourDay){
                restHour = tiempoRestante(hour[0],hour[1],hourDay,minDay)[0];
    
                for(var j = i; j <= end; j++){
                    minDay = parseInt( day[j][3] + day[j][4]);
    
                    if((hour[0] == hourDay) && hour[1] <= minDay ){
                        restMin = tiempoRestante(hour[0],hour[1],hourDay,minDay)[1];
                        break;
                    }
                }
                break;
            }
            console.log("La proxima hora es "+ hourDay,minDay)
        }
    }
    return [restHour, restMin];
}*/

function proximaHora (hour,day){

    result = [-1,-1]
    for(var i = 0; i< day.length; i++){
        hourDay = parseInt( day[i][0] + day[i][1]);
        minDay = parseInt( day[i][3] + day[i][4]);
        
        if(hour[0] <= hourDay){
            if(hour[1] <= minDay){
                restHour = tiempoRestante(hour[0],hour[1],hourDay,minDay)[0];
                restMin = tiempoRestante(hour[0],hour[1],hourDay,minDay)[1];
                
                return result = [restHour,restMin]
            }
        }   
    }

    return result
}

function diaCorrespondiente (dayNumber){

    if(dayNumber >= 1 && dayNumber <= 5){
        return 0;
    }else if (dayNumber == 6){
        return 1;
    }else if(dayNumber == 0){
        return 2;
    }
}

//Rivadavia
var restanteRivadavia = proximaHora(hourNow,Riva[diaCorrespondiente(day)])

let restanteDOM = document.getElementById("tiempo-restante-label")
restanteDOM.innerText = "Faltan " + restanteRivadavia[0] + "hs " + restanteRivadavia[1] + "min"

let proximoDOM = document.getElementById("siguiente-micro-horario")
proximoDOM.innerText = "El proximo micro es a las " + hourDay + ":" + minDay + "hs";

//Mendoza
var restanteMendoza = proximaHora(hourNow,Mza[diaCorrespondiente(day)])

let restantemzaDOM = document.getElementById("tiempo-restante-mza")
restantemzaDOM.innerText = "Faltan " + restanteMendoza[0] + "hs " + restanteMendoza[1] + "min"

let proximomzaDOM = document.getElementById("siguiente-micro-horario-mza")
proximomzaDOM.innerText = "El proximo micro es a las " + hourDay + ":" + minDay + "hs";
//Hora actual
let horaactualDOM = document.getElementById("hora-actual");
horaactualDOM.innerText = "Tu horario capturado fue " + hour;