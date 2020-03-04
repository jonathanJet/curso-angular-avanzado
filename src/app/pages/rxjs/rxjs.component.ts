import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { retry, map, filter } from 'rxjs/operators'
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 
    this.subscription = this.regresarObs()/*.pipe(retry(2))*/
    .subscribe(
      numero => console.log('Subs: ' + numero),
      error => console.log('Error en el observable: ' + error),
      () => console.log('El observador Termino')
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  regresarObs() : Observable <any> {

    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      let intervalo = setInterval( ()=> {
        
        contador += 1;
        
        const salida = {
          valor: contador
        }
      
        observer.next(salida);

        /*if (contador === 3 ){
          clearInterval(intervalo);
          observer.complete();
        }*/

        /*if (contador === 2 ){
          clearInterval(intervalo);
          observer.error(-1);
        }*/

      }, 1000 );

    }).pipe(

      map( salida => { return salida.valor } ), //Filtra la salida del observer 
      filter( (value,index) => { // filtra la salida
        if ( value%2 == 1) {
          //numero impar
          return true;
        } else {
          //numero par
          return false;
        }
      } )

    );

  }

}
