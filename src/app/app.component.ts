import { Component } from '@angular/core';
import {cata} from './component/top-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pinduoduo';
  cataList: cata[] = [
    {
      title:"热门", //接口内的不同属性用逗号分割，而不是分号。
      link:"#"
    },
    {
      title:"运动",
      link:"#"
    },
    {
      title:"时尚",
      link:"#"
    },
    {
      title:"宠物",
      link:"#"
    },
    {
      title:"男装",
      link:"#"
    },
    {
      title:"女装",
      link:"#"
    },
  ]
}
