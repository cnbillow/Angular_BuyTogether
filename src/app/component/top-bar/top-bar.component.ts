import { Component, OnInit, Input } from '@angular/core';

export interface cata{
  title: string;
  link: string
}  //接口是外部定义的一种类型规范
//配合Input使用时，从外部调用接口，需要export interface

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedNum: number = -1;
  @Input() cataList:cata[] = [];

}