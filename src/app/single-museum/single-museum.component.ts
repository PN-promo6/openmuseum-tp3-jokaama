import { Component, OnInit, Input } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';
@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})
export class SingleMuseumComponent implements OnInit {

@Input() nameMuseum: string;
@Input() cityMuseum: string;
@Input() adressMuseum: string;
@Input() numberMuseum: string;
@Input() websiteMuseum: string;
@Input() openMuseum: string;
@Input() museumId: any;

// 2. Constructeur
  constructor(private museumListService: MuseumListService) {

   }

  ngOnInit() {
  }

}
