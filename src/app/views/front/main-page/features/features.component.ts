import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  titre = "Bookmark in one click";

  book = true;
  speedy = false;
  easy = false;

  ngOnInit(): void {
    window.scrollTo({
      top:0
    })
  }
  changeALL(s:string){

  }

  changespeed(){
    if (this.speedy == false){
      this.speedy = true;
      this.easy = false;
      this.book = false;
    }
  }

  changeEasy(){
    if (this.easy == false){
      this.easy = true;
      this.speedy = false;
      this.book = false;
    }
  }

  changebook(){
    if (this.book == false){
      this.book = true;
      this.speedy = false;
      this.easy = false;
  }
}

}
