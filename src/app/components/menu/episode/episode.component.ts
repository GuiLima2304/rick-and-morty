import { Component, OnInit } from '@angular/core';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.sass']
})
export class EpisodeComponent implements OnInit {

  public listEpisodes: any;

  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.episodeService.getAllEpisode().subscribe((resp => this.listEpisodes = resp));

  }

}
