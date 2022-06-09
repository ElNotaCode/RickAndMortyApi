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
    private route: ActivatedRoute,
    private articulosService: ArticulosService
  ) {
    this.route.params.subscribe((params) => (this.idCharacter = params['id']));
    console.log(this.idCharacter);
  }

  idCharacter: string = '';

  ngOnInit(): void {
    this.articulosService
      .retornarPersonaje(this.idCharacter)
      .subscribe((result) => (this.character = result));
  }

  character: any = '';
}
