import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  pasos: any[];
  vector: any[];
  matriz: any[];
  contadorPivotes = 0;
  tam = 0;
  constructor() {}
  ngOnInit() {
    this.matriz = [
      [ { value: '' }, { value: '' } ],
      [ { value: '' }, { value: '' } ]];
    this.vector = [{value: ''}, {value: ''}];
    this.pasos = [];

  }
  
  calcular() {
    this.tam = this.matriz.length - 1;
    let matrizIterable = this.matriz;
    this.debugMatrisClg(matrizIterable, 'inicial');
    let anterior = (this.contadorPivotes > 0) ? this.contadorPivotes - 1 : 0;
    matrizIterable = this.ordenarVerificarMatriz(matrizIterable, this.contadorPivotes, anterior);
    this.contadorPivotes = 0;
    this.debugMatrisClg(matrizIterable, `ordenada final `);
  }

  ordenarVerificarMatriz(matriz, pivoteActual, anterior) {
    let matrizOrdenada = matriz;
    let vectorIterable = [];
    let vectorAnterior = [];
    for(let i = 0; i <= this.tam; i++) {
      let pivoteInterno = matriz[i][pivoteActual];
      console.log('pivote', pivoteInterno['value']);
      for (let j = 0; j <= this.tam; j++) {
        if (pivoteInterno['value'] == 1) {
          let elementos = matriz[i][j]['value'];
          vectorIterable = matriz[i];
          vectorAnterior =  matriz[pivoteActual];   
          console.log('vector iterable', vectorIterable);
          console.log('vector anterior', vectorAnterior);
          matrizOrdenada.splice(pivoteActual, 1, vectorIterable);
          matrizOrdenada.splice(i, 1, vectorAnterior);
          console.log(pivoteInterno);
          break;
        } else {
          console.log('no es 1');
          
        }
      }
    }
    this.contadorPivotes++;
    return matrizOrdenada;
  }



 debugMatrisClg(matriz, txt) {
  matriz.forEach( e => {
    console.log(`Matriz ${txt}`);
    
    e.forEach(element => {
      console.log(element['value']);
      
    });
  });
 }




  /////////////////////////////////JAJAJAJAJJA MI PRIMER INTENTO JUAJAUJAUJAU SOS PAPEL
  aumentar() {
    let newArray = this.CreateNewArray(this.matriz[0].length);
    this.vector.push('');
    this.matriz.push(newArray);
    for(let i = 0; i < this.matriz[0].length; i++) {
      this.matriz[i].push({value: ''});
    }
  }
  CreateNewArray(size: number) {
    let array: any = new Array(size);
    for(let i = 0; i < this.matriz[0].length; i++) {
      array[i] = {value: ''};
    }
    return array;
  }
  disminuir() {
    if (this.matriz[0].length > 2) {
      this.vector.pop();
      this.matriz.pop();
      for(let i = 0; i < this.matriz[0].length; i++) {
        this.matriz[i].pop();
      }
    }
  }
  ///////////////////////////////////////////////////////////////por si las moscas
  dividir(divisor: any) {
    let objIte = {value: 0};
    let arrIte = [];
// tslint:disable-next-line: align
  for(let i = 0; i < this.matriz[0].length; i++ ) {
    objIte.value = this.matriz[0][i].value / divisor;
    arrIte.push(objIte);
    console.log('Arreglo de paso', arrIte);
    console.log('objeto con la divición',objIte);
  }
  this.pasos.push(arrIte);
  }
  sumarValores(fila: any) {
    let objITe = {value: 0};
    let arrIte = [];
    this.multiplicarValores(fila[0].value);

  }
  multiplicarValores(valor: number) {
  }
}
