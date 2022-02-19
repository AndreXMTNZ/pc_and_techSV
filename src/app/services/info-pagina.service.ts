import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interface/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPage = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient ) { 
    console.log('Servicio de infoPagina listo')
    this.cargarInfo();
    this.cargarEquipo();

 }

 private cargarInfo() { 
  //leer el archivo json
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {
        this.cargada = true;
        this.info = resp;
        //console.log(resp);

      });

 }

 private cargarEquipo() {
  //leer el archivo json
  this.http.get('https://angular-html-a8622-default-rtdb.firebaseio.com/equipo.json')
  .subscribe( (resp: any) => {
    //this.equipo = true;
    this.equipo = resp;
    console.log(resp);

  });
 }

}
