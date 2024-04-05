const palos = ["oros","copas","espadas","bastos"];
const cartaspalo = 10;

function crearBaraja(){
    const baraja = [];
    //Iterar sobre los palos y las cartas para crear cada carta
    for (let i=0;i<palos.length;i++){
        for(let j=1;j<=cartaspalo;j++){
            baraja.push({palo:palos[i], numero: j})
        }
    }
    return baraja;
}

function barajarBaraja(baraja){
    for (let i=baraja.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [baraja[i],baraja[j]]= [baraja[j],baraja[i]]
    }
    return baraja;
}

function seleccionar40Cartas(baraja){
    const cartasSeleccionadas = [];
    const barajaBarajada = barajarBaraja([...baraja]);
    for (let i = 0; i<40; i++){
        cartasSeleccionadas.push(barajaBarajada[i])
    }
    return cartasSeleccionadas
}

const baraja = crearBaraja();

const cartasAleatorias = seleccionar40Cartas(baraja);

console.log(cartasAleatorias);