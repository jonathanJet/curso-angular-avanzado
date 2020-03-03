import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() progress : number;
  @Input() leyenda : string = 'Leyenda'

  @Output() valorActualizado = new EventEmitter<number>()

  @ViewChild('txtProgress') elementoInput: ElementRef; 

  constructor() { }

  ngOnInit(): void {
  }

  update($event){
    if($event>=100){
      this.progress = 100;
    }else if ($event<=0){
      this.progress = 0;
    }else{
      this.progress = $event;
    }
    this.valorActualizado.emit($event);
    this.elementoInput.nativeElement.value = this.progress
  }

  cambiarValor(numero: number){

    let numTemp = this.progress + numero

    if(numTemp >= 100){
      this.progress = 100
      return
    }
    if(numTemp <= 0){
      this.progress = 0
      return
    }

    this.progress += numero;

    this.valorActualizado.emit(this.progress);

  }

}
