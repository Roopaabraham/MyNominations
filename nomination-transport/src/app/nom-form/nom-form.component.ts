import { Component, OnInit } from '@angular/core';
import { NominationForm } from '../nomination-form';

@Component({
  selector: 'app-nom-form',
  templateUrl: './nom-form.component.html',
  styleUrls: ['./nom-form.component.css']
})
export class NomFormComponent implements OnInit {

  model = new NominationForm(527,"Houston","Dallas","Gasoline",1000,new Date("02/10/2016"),new Date("05/10/2016"));

  constructor() { }

  ngOnInit() {
  }

}
