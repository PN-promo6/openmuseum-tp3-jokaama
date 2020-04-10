import { Component, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  nameMuseum: string;
  cityMuseum: string;
  adressMuseum: string;
  numberMuseum: string;
  openMuseum: string;


  constructor(private museumListService: MuseumListService, private route:ActivatedRoute) { }

  ngOnInit() {

  }

}
