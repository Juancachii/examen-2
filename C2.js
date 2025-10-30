let palabras = ["precisamente","es","grande","pero","no","precisame"];
let pos=0

for(let i = 1;i<palabras.length;i++) {
    if(palabras[i].length >palabras[pos].length){
        pos=i;
    }
}

console.log("el texto mas largo esta en el indice "+pos);