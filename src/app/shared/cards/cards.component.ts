import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() nombre: string = '';
  @Input() imagen: string = '';
  @Input() puntuacion: string = '';
  @Input() id: number= 0;
  @Input() media_type: string = '';

  
  
  ngOnInit (): void {}

}
