import { Component } from '@angular/core';
import { MovieSerie } from 'src/app/shared/Interface/MovieSerie.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})



export class InicioComponent {
  
  movies_series : MovieSerie [] = [
    {
      id: 0,
      name:'Black widow',
      description: 'Natasha Romanoff, alias Viuda Negra, se enfrenta a las partes más oscuras de su historia cuando surge una peligrosa conspiración con vínculos con su pasado. Perseguida por una fuerza que no se detendrá ante nada para acabar con ella, Natasha debe enfrentarse a su historia como espía y a las relaciones rotas que dejó a su paso mucho antes de convertirse en una Vengadora.',
      image: "/assets/img/black-widow.svg",
      rating: 6.8,
      category: 'Movie'
  
      
    },
    {
      id: 2,
      name:'ShangChi',
      description: 'Adaptación cinematográfica del héroe creado por Steve Englehart y Jim Starlin en 1973, un personaje mitad chino, mitad americano, cuyo característico estilo de combate mezclaba kung-fu, nunchacos y armas de fuego.',
      image: "/assets/img/shang-chi.svg",
      rating: 7.9,
      category: 'Movie'
      
    },
    {
      id: 3,
      name:'Loki',
      description: 'Loki es llevado ante la misteriosa organización llamada AVT (Autoridad de Variación Temporal) después de los acontecimientos ocurridos en "Avengers: Endgame (2019)" y se le da a elegir enfrentarse a ser borrado de la existencia debido a que es una "variante de tiempo" o ayudar a arreglar la línea de tiempo y detener una amenaza mayor.',
      image: "/assets/img/loki.svg",
      rating: 8.4,
      category: 'Serie'
      
    },
    {
      id: 4,
      name:'How I Meet Your Mother',
      description: 'En el año 2030, Ted (Josh Radnor) relata a sus dos hijos adolescentes cómo conoció a su madre y cómo fue su vida hasta que, por fin, encontró el amor verdadero. Todo empezó cuando Marshall (Jason Segel), su mejor amigo, decidió casarse con Lily (Alyson Hannigan), su novia de toda la vida. Entonces Ted decidió lanzarse a la búsqueda del amor verdadero y formar una familia. Para conseguirlo contó con el apoyo de su amigo Barney (Neil Patrick Harris), un joven algo extravagante y muy hábil para conocer mujeres. Cuando, por fin, Ted conoce a Robin (Cobie Smulders), una impresionante joven canadiense que acaba de mudarse a Nueva York, está completamente seguro de que es amor a primera vista, pero el destino aún puede depararle muchas sorpresas.',
      image: "/assets/img/how-i-met-your-mother.svg",
      rating: 8.3,
      category: 'Serie'
      
    },
    {
      id: 5,
      name:'Money Heist',
      description: 'Un enigmático personaje llamado el Profesor planea algo grande: llevar a cabo el mayor atraco de la historia. Para ello recluta una banda de ocho personas que reúnen un único requisito, ninguno tiene nada que perder. Cinco meses de reclusión memorizando cada paso, cada detalle, cada probabilidad… y por fin, once días de encierro en la Fábrica Na',
      image: "/assets/img/money-heist.svg",
      rating: 8.3,
      category: 'Serie'
      
    },
    {
      id: 6,
      name:'Friends',
      description: 'Las aventuras de seis jóvenes neoyorquinos unidos por una divertida amistad. Entre el amor, el trabajo y la familia, comparten sus alegrías y preocupaciones en el Central Perk, su café favorito.',
      image: "/assets/img/friends.svg",
      rating: 8.8,
      category: 'Serie'
      
    },
    {
      id: 7,
      name:'The Big Bang Theory',
      description: 'Leonard y Sheldon son dos cerebros privilegiados que comparten piso. Aunque los dos, doctores en Física, son capaces de calcular las probabilidades de existencia de otros mundos, no saben cómo relacionarse con los demás, especialmente con las chicas. Penny, una vecina recién llegada, es el polo opuesto a los dos amigos, de modo que su llegada altera la tranquila vida sentimental de Leonard y el desorden obsesivo-compulsivo de Sheldon.',
      image: "/assets/img/the-big-bang-theory.svg",
      rating: 8.1,
      category: 'Serie'
      
    },
    {
      id: 8,
      name:'Two And A Half Men',
      description: 'Charlie Harper es un soltero con dinero que tiene una casa en la playa y gran éxito con las mujeres. Pero su informal estilo de vida en Malibú se ve bruscamente interrumpido cuando su hermano Alan, muy deprimido por su divorcio, y su hijo Jake, llegan para quedarse a vivir con él. La situación se complica aún más gracias a Evelyn, la egocéntrica y controladora madre de Charlie y Alan. A pesar de la complejidad de sus vidas y de sus tensas relaciones, Charlie y Alan tienen una cosa en común: adoran a Jake y quieren lo mejor para él.',
      image: "/assets/img/two-and-a-half-men.svg",
      rating: 7.0,
      category: 'Serie'
      
    },
  
  ]

  selected: string = 'Todos';

  CambiarCategoria (value:string){
    console.log ('Viejo valor del selected', this.selected)
    this.selected = value;
    console.log ( 'nuevo valor del selected', this.selected)
  }

  buscar(value:string){
    console.log (value)
  }
}
