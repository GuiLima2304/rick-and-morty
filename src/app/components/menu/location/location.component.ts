import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {
  
  public listLocations: any;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getAllLocations().subscribe((resp => this.listLocations = resp));
  }

}
