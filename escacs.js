
function dibuixar() {
    let canvas = document.getElementById('dibuix');
    let ctx = canvas.getContext('2d');
    const MIDA = 40;
    const N = 8;
    const tableroOffset = 40; // Espacio para referencias
    const totalSize = MIDA * N;

  
    let gradBG = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradBG.addColorStop(0, '#e0eafc');
    gradBG.addColorStop(1, '#a1c4fd');
    ctx.fillStyle = gradBG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let fila = 0; fila < N; fila++) {
        for (let columna = 0; columna < N; columna++) {
         
            let x = tableroOffset + columna * MIDA;
            let y = tableroOffset + fila * MIDA;
            if ((fila + columna) % 2 === 0) {
        
                let grad = ctx.createLinearGradient(x, y, x + MIDA, y + MIDA);
                grad.addColorStop(0, '#fff');
                grad.addColorStop(1, '#eaeaea');
                ctx.fillStyle = grad;
            } else {
                ctx.fillStyle = '#404654';
            }
            ctx.fillRect(x, y, MIDA, MIDA);
        }
    }

    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let j = 0; j < N; j++) {
        let letra = String.fromCharCode(97 + j); // a-h
        // Arriba
        ctx.fillStyle = '#333';
        ctx.fillText(letra, tableroOffset + MIDA/2 + j*MIDA, tableroOffset - 20);
        // Abajo
        ctx.fillText(letra, tableroOffset + MIDA/2 + j*MIDA, tableroOffset + totalSize + 20);
    }
  
    for (let i = 0; i < N; i++) {
        let numero = (N - i).toString();
        // Izquierda
        ctx.fillStyle = '#333';
        ctx.fillText(numero, tableroOffset - 20, tableroOffset + MIDA/2 + i*MIDA);
        // Derecha
        ctx.fillText(numero, tableroOffset + totalSize + 20, tableroOffset + MIDA/2 + i*MIDA);
    }


    function dibujarPieza(tipo, color, fila, columna) {
        let img = new Image();
        img.src = `img/Chess_${tipo}_${color}.png`;
        img.onload = function () {
            ctx.drawImage(img,
                tableroOffset + columna * MIDA + 2,
                tableroOffset + fila * MIDA + 2,
                MIDA - 4, MIDA - 4);
        }
    }
  
    let piezasInicial = [
        ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
        Array(8).fill('pawn'),
    ];
   
    for (let j = 0; j < 8; j++) {
        dibujarPieza(piezasInicial[0][j], 'b', 0, j);
        dibujarPieza(piezasInicial[1][j], 'b', 1, j);
    }
 
    for (let j = 0; j < 8; j++) {
        dibujarPieza(piezasInicial[1][j], 'w', 6, j);
        dibujarPieza(piezasInicial[0][j], 'w', 7, j);
    }
}
window.addEventListener("load", dibuixar, true);