import { Component } from '@angular/core';
import {cata} from './component/top-bar';
import {slider} from './component/image-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pinduoduo';

  //TopBar数据
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
    {
      title:"图书",
      link:"#"
    },
    {
      title:"电子",
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
    {
      title:"图书",
      link:"#"
    }
  ]

  // Sliders数据
    sliders:slider[] = [
      {
        link:"../../../assets/1.jpg",
        description:"1"
      },
      {
        link:"../../../assets/2.jpg",
        description:"2"
      },
      {
        link:"../../../assets/3.jpg",
        description:"3"
      }
    ]
}
