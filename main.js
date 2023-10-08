let now = Date.now();
let d = new Date(now);
let day = d.getDay(); //dia de hoy en un valor numerio
let hour = new Date().toLocaleTimeString("es-AR");  //hora de hoy
let hourDay, minDay;

var hourNow = [parseInt(hour[0]+hour[1]), parseInt(hour[3]+hour[4])]


/*INVIERNO let weekdaysRivadavia = [
    '05:50', '06:20', '07:00', '07:40', '08:25', '09:05', '09:45', '11:00', '11:40', '12:30',
    '13:40', '14:55', '15:45', '16:25', '17:30', '18:30', '19:30', '20:30', '21:30'
];*/

let weekdaysRivadavia =[ 
    "5:50", "6:20", "7:00", "7:40", "8:25", "9:05", "9:45", "10:55", "11:40", "12:20", "13:00", 
    "13:40", "14:25", "14:55", "15:35", "16:15", "16:55", "17:35", "18:15", "18:55", "19:35", 
    "20:15", "20:45", "21:30"
];

/*INVIERNO let saturdayRivadavia = [
    '07:00', '07:40', '10:20', '11:00', '15:00', '15:40', '17:40', '19:00', '20:30', '21:35'
];*/

let saturdayRivadavia = [
    "7:00", "7:40", "10:20", "11:00", "15:00", "15:40", "17:40", "19:00", "20:30", "21:30"

];

/*let sundayRivadavia = [
    '15:00', '15:48', '17:46', '19:00', '20:30', '21:30'
];*/

let sundayRivadavia = [
    "15:00", "15:40", "17:40", "19:00", "20:30", "21:30" 
];

/*let weekdaysMendoza = [
    '07:15', '07:55', '08:35', '09:20', '9:40', '10:20', '11:05', '12:15', '13:00',
    '13:45', '15:00', '16:20', '17:05', '17:45', '19:00', '19:45', '21:00', '21:50'
];*/

let weekdaysMendoza = [
    "7:20", "8:00", "8:40", "9:20", "10:05", "10:40", "11:25", "12:10", "12:50",  
    "13:30", "14:10", "14:50", "15:30", "16:10", "16:50", "17:30", "18:10",  
    "18:50", "19:30", "20:10", "20:50", "21:30", "22:05", "22:50"
];

/*let saturdayMendoza = [
    '08:30', '09:15', '12:30', '13:15', '16:25', '17:10', '19:00', '20:25', '21:50', '22:50'
];*/

let saturdayMendoza = [
    "8:30", "9:15", "12:30", "13:15", "16:25", "17:10", "19:00", "20:25", "21:50", "22:50"
];

/*let sundayMendoza = [
    '16:25', '17:10', '19:00', '20:25', '21:50', '22:50'
];*/

let sundayMendoza = [
    "16:25", "17:10", "19:00", "20:25", "21:50", "22:50"
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

function posicionElemento (hour,day){

    listMinutes = aMinutos(day)
    myHourinMinute = hour[0]*60 + hour[1];
    hora = [0,0];
    for(var i = 0; i < day.length; i++){
        if(myHourinMinute <= listMinutes[i]){
            hora = proximaHora(i,day);

            hourDay = hora[0]
            minDay = hora[1]
            console.log(hourDay)
            console.log(tiempoRestante([hourNow[0],hourNow[1],hora[0], hora[1]]))
            return tiempoRestante(hour[0],hour[1],hora[0], hora[1])
        }
    }
    
    if (hora[0] === 0 && hora[1] === 0) {
        return hora;
    }
}

function proximaHora(posicion,day){
    if (day.length > posicion) {
        return [parseInt(day[posicion][0] + day[posicion][1]), parseInt(day[posicion][3] + day[posicion][4])];
    }
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

function aMinutos (day){

    let listMinutes = [];
    for(var i = 0; i < day.length; i++){
        let hour = parseInt(day[i][0] + day[i][1])*60;
        let minute = parseInt(day[i][3] + day[i][4]) ;

        listMinutes.push(hour+minute);
    }   
    return listMinutes;
}

//Rivadavia
console.log(hourNow)
var restanteRivadavia = posicionElemento(hourNow,Riva[diaCorrespondiente(day)])
let restanteDOM = document.getElementById("tiempo-restante-label")
let proximoDOM = document.getElementById("siguiente-micro-horario")

if(restanteRivadavia[0] == 0 && restanteRivadavia[1] == 0){
    restanteDOM.innerText = "No hay micros disponibles para hoy. Revise los horarios haciendo click en Ver horarios";
}else{
    restanteDOM.innerText = "Faltan " + restanteRivadavia[0] + "hs " + restanteRivadavia[1] + "min";
    proximoDOM.innerText = "El proximo micro es a las " + hourDay + ":" + minDay + "hs";
}

//Mendoza
var restanteMendoza = posicionElemento(hourNow,Mza[diaCorrespondiente(day)])
let restantemzaDOM = document.getElementById("tiempo-restante-mza")
let proximomzaDOM = document.getElementById("siguiente-micro-horario-mza")

if( restanteMendoza[0] == 0 && restanteMendoza[1] == 0){
    restantemzaDOM.innerText = "No hay micros disponibles para hoy. Revise los horarios haciendo click en Ver horarios";
}else{
    restantemzaDOM.innerText = "Faltan " + restanteMendoza[0] + "hs " + restanteMendoza[1] + "min";
    proximomzaDOM.innerText = "El proximo micro es a las " + hourDay + ":" + minDay + "hs";
}
//Hora actual
let horaactualDOM = document.getElementById("hora-actual");
horaactualDOM.innerText = "Tu horario capturado fue " + hour;
