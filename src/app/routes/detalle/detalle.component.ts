import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  id: number= 0;

constructor(private route: ActivatedRoute){}

ngOnInit(){
  this.id = Number (this.route.snapshot.paramMap.get("id")) || 0; 
}

}
