import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private http: HttpClient) {}

  articulos: any = null;

  ngOnInit(): void {
    this.http
      .get('https://rickandmortyapi.com/api/character/1,2,3,4,5')
      .subscribe(
        (result) => {
          this.articulos = result;
        },
        (error) => {
          console.log('problemas');
        }
      );
  }
}
