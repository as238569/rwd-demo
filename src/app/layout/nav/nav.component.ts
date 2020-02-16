import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('dropdown', {static: false}) 
  dropdownElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  OnNavButtonClick(): boolean
  {
    if(this.dropdownElement.nativeElement.className  === 'dropdownHide') {
      this.dropdownElement.nativeElement.className ='dropdownShow';
    } else {
      this.dropdownElement.nativeElement.className ='dropdownHide';
    }

    return false;//阻止tag <a> 原本的超連接動作
  }

}
