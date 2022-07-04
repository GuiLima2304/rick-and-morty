import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  url: string = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) { }

  public getAllEpisode() {
    return new Observable((obs) => {
      this.http.get(this.url).subscribe((resp: any) => {
        obs.next(resp);
        obs.complete();
      }, (error => {
        obs.error(error);
        obs.complete();
      }))
    })
  }
}
