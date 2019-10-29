import { Component, OnInit, Input } from '@angular/core';


export interface channel{
  id:number;
  title:string;
  icon:string;
  link:string;
}
//注意接口属性之间用分号而非逗号


@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent implements OnInit {
  barMargin:string = '0';

  @Input() channelList:channel[] = [];
  constructor() { }


  ngOnInit() {
  }

  handleScroll(ev){
    this.barMargin = `${(100 * ev.target.scrollLeft) /
      ev.target.scrollWidth}%`;
  }
}
