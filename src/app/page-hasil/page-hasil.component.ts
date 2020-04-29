import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PageHasilComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  tempHasil : string;

  ngOnInit() {
    let hasil = this.route.snapshot.paramMap.get('hasil');
    this.tempHasil = hasil;
  }
}