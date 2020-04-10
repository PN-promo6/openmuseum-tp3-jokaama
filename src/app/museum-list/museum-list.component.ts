import { Component, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {
    museums: any[];
  // 2. Constructeur
  constructor(private museumListService: MuseumListService) {

  };
  // 3. Méthodes

  ngOnInit() {
    this.museums = this.museumListService.museums;
  };
}
