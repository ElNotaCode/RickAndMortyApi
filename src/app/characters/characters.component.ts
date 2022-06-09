import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private articulosServicio: ArticulosService) {}

  articulos: any = null;

  ngOnInit(): void {
    this.articulos = this.articulosServicio.retornar();
  }
}
