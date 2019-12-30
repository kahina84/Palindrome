import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {
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
