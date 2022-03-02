//algorismo para determinar si un año es bisiesto
// es disivible entre 4
// no es divisible por 100
// es divisible por 400

let anioBisiesto = parseInt(prompt('Ingrese un año: '));

if ((anioBisiesto % 4 === 0 & anioBisiesto % 100 !== 0)
    || (anioBisiesto % 100 === 0 & anioBisiesto % 400 === 0)) {
    alert(`El año  ${anioBisiesto} es bisiesto`);
}
else {
    alert(`El año ${anioBisiesto} No es bisiesto`);
}

// crear un arreglo con 10 notas
// elavaluar cada un de ellas y si es mayor e igual a 6 aprobo
// si es menor a 6 desaprobado

let notasDePractica = [8, 4, 7, 4, 2, 10, 3, 5, 1, 9];

for (let i = 0; i < notasDePractica.length; i++) {
    if (notasDePractica[i] >= 6) {
        let notasAprobadas = notasDePractica[i];
        console.log(`Estas aprobado, ${notasDePractica[i]}`);
        alert(`Las siguientes notas estan aprobadas ${notasAprobadas}`)

    }
    else {
        console.log(`Estas desaprobado, ${notasDePractica[i]}`);
       

    }
}

