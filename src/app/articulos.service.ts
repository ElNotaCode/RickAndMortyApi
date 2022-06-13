import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  constructor(private http: HttpClient) {}

  retornar() {
    return this.http.get('https://rickandmortyapi.com/api/character/1,2,3,4,5');
  }

  retornarCinco() {
    return this.http.get('https://rickandmortyapi.com/api/character/1,2,3,4,5');
  }

  retornarPagina() {
    return this.http.get(
      '  //https://rickandmortyapi.com/api/character/?page=1'
    );
  }

  retornarPersonaje(id: string) {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }
}
