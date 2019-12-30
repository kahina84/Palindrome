import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
}) 
export class StatsComponent implements OnInit {
  CheminComplet = document.location.href;
  Status = 'KO';
  constructor() { }
  
  getUrl() {
    this.CheminComplet = this.CheminComplet.split('/').pop().toLowerCase().replace(/ /g,"");
    if (this.CheminComplet !== '' && this.CheminComplet !== 'undefined') {
    if (this.CheminComplet.split('').reverse().join('') === this.CheminComplet){
      this.Status = 'OK';
    } else {
      this.Status = 'KO';
    }}
  }
  ngOnInit() {
    this.getUrl();
  }

}
