import { Palind } from './palind';
import { PalinService } from './palin.service';
import {Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PalinService]
})


export class AppComponent implements OnInit {
  title = 'Palindrome';
  palindromes;
  palinMock: Palind[];
  palin: Observable<Palind[]>;


  constructor(private palinservice: PalinService) {
    this.palinMock = this.palinservice.getPalinMock();
  }


  ngOnInit() {

    this.palinservice.getPalin().subscribe(
      data => {
        this.palindromes = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }

    );
    window.alert("on est la avec "+this.palindromes);
  }


   static isPalindrome(p: Palind ): boolean {
    if ( p.label.split('').reverse().join('') === p.label) {
      return true;
    } else {
     return false;
    }

  }


}
