import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.css']
})
export class BreadcrumsComponent implements OnInit {
  @Input() artistName: string;
  @Input() albumName: string;

  constructor() { }

  ngOnInit() {
  }

}
