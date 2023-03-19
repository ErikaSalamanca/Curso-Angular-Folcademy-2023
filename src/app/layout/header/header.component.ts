import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges{

  public usuario: any= null

  constructor(
    
  ){}

  ngOnInit(){

    this.obtenerUsuario()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.obtenerUsuario()
  }

  obtenerUsuario(){

    this.usuario = localStorage.getItem('usuario')
   
  }

  cerrarSesion(){
    localStorage.clear()
    this.obtenerUsuario()
  }

}
