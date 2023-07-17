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
]


function encontrarListaDia(day,ubicacion){

    if(ubicacion == 0){
        switch (day) {
            case 1:
                encontrarHorario(miH,miM,Riva[0], Riva[0].length)
              break;
            case 0:
                encontrarHorario(miH,miM,Riva[2], Riva[2].length)
              break;
            case 6:
                encontrarHorario(miH,miM,Riva[3], Riva[3].length)
              break;
    
          }
    }else{
        switch (day) {
            case 1:
                encontrarHorario(miH,miM,Mza[0], Mza[0].length)
              break;
            case 0:
                encontrarHorario(miH,miM,Mza[2], Mza[2].length)
              break;
            case 6:
                encontrarHorario(miH,miM,Mza[3], Mza[3].length)
              break;
    
          }
    }
    
}

function encontrarHorario (mH, mM, day, total){
    var num = 0;
    var seRepite = 0;
    var distanciaH = parseInt(day[0][0] + day[0][1]);
    var distanciaM = parseInt(day[0][3] + day [0][4]);
    var hourEncontrada, minEncontrado;

    var suHora, suMin, restH, restM;
    for(var i = 0; i < total; i++){

        suHora = parseInt(day[i][0] + day[i][1]);
        suMin = parseInt(day[i][3] + day[i][4]);

        restH = calculoDiaSiguiente(mH,mM,suHora,suMin)[0]
        restM = calculoDiaSiguiente(mH,mM,suHora,suMin)[1]

        if(restH <= distanciaH){
            distanciaH = restH
            hourEncontrada = suHora;
            minEncontrado = suMin;
            if(suHora == num){
                seRepite = seRepite + 1;

                if(restM <= distanciaM ){
                    c = 1;
                    distanciaM = restM

                    minEncontrado = suMin;
                }
            }else{
                num = suHora;
                seRepite = 0;
            }
        }
    }
    proximo = [hourEncontrada, minEncontrado];
    
    
    console.log(restante)
}
function calculoDiaSiguiente(mH, mM, sH, sM){
    if(mM > sM){
        console.log("Entre 1")
        if(mH <= sH){
            console.log("Entre 2")
            return [Math.abs(sH-mH-1), Math.abs(60-mM+sM)];
        }else if (mH > sH){
            return [Math.abs(((24-mH)+(sH)-1)),Math.abs(60-mM+sM)];
        }
    }else{
        if(mH <= sH){
            return [Math.abs(mH-sH),Math.abs(mM-sM)];
        }else if (mH > sH){
            return [Math.abs(((24-mH)+(sH))),Math.abs(mM-sM)];
        }
    }

} 

let now = Date.now();
let d = new Date(now);
let day = d.getDay();
let hour = new Date().toLocaleTimeString("es-AR");
var miH = parseInt(hour[0]+hour[1]);
var miM = parseInt(hour[3]+hour[4]);
var restante,proximo;

console.log(miH,miM)

encontrarListaDia(day,0);
restante = calculoDiaSiguiente(miH, miM, proximo[0], proximo[1]);


let restanteDOM = document.getElementById("tiempo-restante-label")
let timerestanteDOM = document.getElementById("tiempo-restante-riva")
restanteDOM.innerText = "Faltan "
timerestanteDOM.innerHTML = restante[0] + "hs " + restante[1] + "m "

let horaactualDOM = document.getElementById("hora-actual");
horaactualDOM.innerText = "Tu horario capturado fue " + hour;

let proximoDOM = document.getElementById("siguiente-micro-horario")
proximoDOM.innerText = "El proximo micro es a las " + proximo[0] + ":" + proximo[1] + "hs";

if((restante[0] == 0 || restante[0] == 1) && (restante[1] > 20)){
    timerestanteDOM.style.color = "rgb(0, 255, 0)"
}else if((restante[0] == 0) && (restante[1] < 20 && restante[1] >= 10  )){
    timerestanteDOM.style.color = "rgb(255, 255, 0)"
}else if((restante[0] == 0) && (restante[1] < 10)){
    timerestanteDOM.style.color = "rgb(255, 99, 71)"
}
encontrarListaDia(day,1);
restante = calculoDiaSiguiente(miH, miM, proximo[0], proximo[1]);

let restantemzaDOM = document.getElementById("tiempo-restante-mza")
let timerestantemzaDOM = document.getElementById("tiempo-restante-label-mza")
restantemzaDOM.innerText = "Faltan ";
timerestantemzaDOM.innerText = restante[0] + "hs " + restante[1] + "m "

let proximomzaDOM = document.getElementById("siguiente-micro-horario-mza")
proximomzaDOM.innerText = "El proximo micro es a las " + proximo[0] + ":" + proximo[1] + "hs";

if((restante[0] == 0 || restante[0] == 1) && (restante[1] > 20)){
    timerestantemzaDOM.style.color = "rgb(0, 255, 0)"
}else if((restante[0] == 0) && (restante[1] < 20 && restante[1] >= 10  )){
    timerestantemzaDOM.style.color = "rgb(255, 255, 0)"
}else if((restante[0] == 0) && (restante[1] < 10)){
    timerestantemzaDOM.style.color = "rgb(255, 99, 71)"
}