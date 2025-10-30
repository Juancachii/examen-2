let numeros = [1,3,5,10,22,12]
let suma =0;
let mayor = numeros[0];
for(let i=0;i < numeros.length;i++){
    suma+=numeros[i];
    if (numeros[i]> mayor){
        mayor =numeros[i];
    }
}
console.log("la suma total "+suma);
console.log("el numero mas grande es:"+mayor)