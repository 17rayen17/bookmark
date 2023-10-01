import { Component } from '@angular/core';

@Component({
  selector: 'app-extention',
  templateUrl: './extention.component.html',
  styleUrls: ['./extention.component.css']
})
export class ExtentionComponent {

  constructor(){
    window.scrollTo({
      top:0
    })
  }
}
