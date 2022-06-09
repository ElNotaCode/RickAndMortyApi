import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css'],
})
export class CharacterInfoComponent implements OnInit {
  constructor(
    private articulosServicio: ArticulosService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => (this.idCharacter = params['id']));
  }

  articulos: any = null;

  ngOnInit(): void {
    this.articulos = this.articulosServicio.retornar();
  }

  //recibimos por input la id del personaje
  idCharacter: string = '';
}
