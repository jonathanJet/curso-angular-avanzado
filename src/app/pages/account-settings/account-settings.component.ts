import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document,public _ajustes: SettingsService ) { 
    
  }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarTema(nombreTema,event: MouseEvent){
    this.aplicarCheck(event.currentTarget);
    this._ajustes.aplicarTema(nombreTema);
  }

  aplicarCheck(elemento){
    let elementsColors = this._document.getElementsByClassName('selector');
    for (let item of elementsColors) {
      item.classList.remove('working');
    }
    elemento.classList.add('working');
  }

  colocarCheck(){
    let tema = this._ajustes.ajustes.tema;
    let elementsColors = this._document.getElementsByClassName('selector');
    for (let item of elementsColors) {
      if(item.getAttribute('data-theme') == tema){
        this.aplicarCheck(item);
        break;
      }
    }
  }

}
