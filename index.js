var imagenes = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'],
cont = 0;

function carrusel(hero){
    hero.addEventListener('click', e => {
        let atras = hero.querySelector('.atras'),
        adelante = hero.querySelector('.adelante'),
        img = hero.querySelector('img'),
        target = e.target;

        if(target == atras){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont--;
            }else{
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        }else if(target == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            }else{
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let hero = document.querySelector('.hero');

    carrusel(hero);
})

// let Canvas = document.getElementById("MiGrafica").getContext("2d");

// var chart = new Chart(Canvas, {
//     type: "bar",
//     data:{
//         labels:["HTML", "CSS", "REACT" , "NODE" , "PHP", ],
//         datasets:[
//             {
//                 label:"Grafica de habilidades",
//                 backgroundColor:"#21bf47",
//                 borderColor:"rgb(0, 255, 0)",
//                 data:[100, 80, 75, 70, 90, 0 ]
//             }
//         ]


//     }
// })

const numb = document.querySelector(".numb");
let counter = 0;
setInterval(()=>{
    if (counter == 100) {
        clearInterval();
        
    }else{
        counter+=1;
        numb.textContent = counter + "%";
    }
}, 80);

var getData = function(){
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    console.log(name+" "+lname+" "+email)
    alert("Mensaje enviado")
}