import { Component, AfterViewInit, Input, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements AfterViewInit {
  
  private myColumns: any[];
  private origData: any[];
  private displayData: any[];
  colWidth: string[] = [];

  @Input()
  set ColumnSource(cols:string[]) {
    this.myColumns = cols;
  }

  @Input()
  set DataSource(input:any[]) {
    this.origData = input;
    this.displayData = this.origData;
  }

 
  @Input()
  set SortColumn(col:string) {
    this.displayData = this.origData.sort(
      (a,b) => {
        if(a[col] < b[col]) return -1;
        else if(a[col] > b[col]) return 1;
        else return 0;
    });
  }

  @Input()
  set FilterData(filter:{col:string, value:any}) {

    if(!filter || !filter.col || !filter.value)
    {
      this.displayData = this.origData;
    }
    else
    {
      this.displayData = this.origData.filter((row) => row[filter.col] === filter.value );
    }
  }

  
  @ViewChildren('measure') 
  divs: QueryList<ElementRef>;

  constructor() {

  }
 
  ngAfterViewInit(){
    setTimeout(() => this.OnResize(),100);//避免ExpressionChangedAfterItHasBeenCheckedError
  }

  OnResize() {
    this.myColumns.forEach((col,index) => this.colWidth[index] = this.getWidth(index));
  }

  getWidth(index:number): string {
    if(!this.divs) 
    {
      return '0';
    }    

    let width = this.divs
      .filter((element,i)=>index === (i % this.myColumns.length))
      .map((element) => element.nativeElement.offsetWidth )
      .reduce((prev, current) => (prev  > current) ? prev : current, 0);


    return (width > 115)? '240px' : '115px';
  }

}
