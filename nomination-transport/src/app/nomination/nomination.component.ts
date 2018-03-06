import { Component, OnInit } from '@angular/core';
import { TransportService } from '../transport.service';
import { TransportNomination } from '../TransportNomination';
import { NOMLIST } from '../mock-data';
@Component({
  selector: 'app-nomination',
  templateUrl: './nomination.component.html',
  styleUrls: ['./nomination.component.css']
})
export class NominationComponent implements OnInit {

  nomdataList:TransportNomination[] = NOMLIST;

  Nomination ='Transport';
  constructor() { }

  ngOnInit() {
  }

}
