import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputText1:string='';
  inputText2:string='';
  sortColumn:string='';
  serchData:{col:string, value:any};


  myData = [
    {
      '證卷代號/名稱': '6701 復興航空',
      '股東會日期': '106/01/11',
      '投票起迄日期': '105/12/27 ~ 106/01/08',
      '股務單位': '群益金鼎證券',
      '聯絡電話': '(02)2703-505'
    }
    ,{
      '證卷代號/名稱': '6702 復興航空',
      '股東會日期': '106/01/12',
      '投票起迄日期': '105/12/27 ~ 106/01/08',
      '股務單位': '群益金鼎證券',
      '聯絡電話': '(02)2703-504'
    },
    {
      '證卷代號/名稱': '6703 復興航空',
      '股東會日期': '106/01/13',
      '投票起迄日期': '105/12/27 ~ 106/01/08',
      '股務單位': '群益金鼎證券',
      '聯絡電話': '(02)2703-503'
    },
    {
      '證卷代號/名稱': '6704 復興航空',
      '股東會日期': '106/01/14',
      '投票起迄日期': '105/12/27 ~ 106/01/08',
      '股務單位': '群益金鼎證券',
      '聯絡電話': '(02)2703-502'
    },
    {
      '證卷代號/名稱': '6705 復興航空',
      '股東會日期': '106/01/15',
      '投票起迄日期': '105/12/27 ~ 106/01/08',
      '股務單位': '群益金鼎證券',
      '聯絡電話': '(02)2703-501'
    }
  ];

  myColumn = ['證卷代號/名稱','股東會日期','投票起迄日期','股務單位','聯絡電話'];

  constructor(){ 

  }

  ngOnInit() {
  }

  OnSortClick()
  {
    this.sortColumn = this.inputText1;
  }

  OnSerchClick()
  {
    this.serchData = {col:'股東會日期', value : this.inputText2};
  }

}
