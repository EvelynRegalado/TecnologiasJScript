import {Component, Input, OnInit} from '@angular/core';
import {PlanetaSWInterface} from "../Interface/StarWars";

@Component({
  selector: 'app-planeta-star-wars',
  templateUrl: './planeta-star-wars.component.html',
  styleUrls: ['./planeta-star-wars.component.css']
})
export class PlanetaStarWarsComponent implements OnInit {


  @Input() planeta:PlanetaSWInterface;
  constructor() { }

  ngOnInit() {
    console.log(`El valor del planeta es: `, this.planeta);
  }

}
