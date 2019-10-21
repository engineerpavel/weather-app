import { Component, OnInit } from '@angular/core';
import {CitiesEnum} from '../../models/cities.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public selectedCity: string = CitiesEnum.ATHENS;

  public citiesEnum = CitiesEnum;

  constructor() { }

  ngOnInit() {
  }

}
