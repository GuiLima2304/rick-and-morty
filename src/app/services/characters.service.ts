import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AsyncSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  url: string = 'https://rickandmortyapi.com/api/character';
  public project = new AsyncSubject();

  constructor(private http: HttpClient) { }

  public teste() {
    this.http.get(this.url).subscribe((resp: any) => {
      console.log(resp);
    })
  }
}
