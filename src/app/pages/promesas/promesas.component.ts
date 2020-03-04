import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      (data) => { console.log('se resolvio la promesa ' + data); }/*,
      () => { console.log('se rechazo la promesa') }*/
      ).catch(
      error => { 
        console.log('se rechazo la promesa ' + error);
      }
    );

  }

  ngOnInit(): void {
  }

  contarTres (): Promise <string> {

    return  new Promise( (resolve,reject) => {
    
      let contador = 0

      let intervalo = setInterval(()=>{
        contador += 1;

        console.log(contador);

        if (contador === 3){
          clearInterval(intervalo);
          resolve('mensaje de exito');
          //reject('mensaje de error');
        }

      },1000)
    
    }); 

  }

}
