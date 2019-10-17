import { Component, OnInit, Input } from '@angular/core';


//若不export img 则在根组件中无法设置

export interface slider{
  link:string;
  description:string;
}


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})

export class ImageSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() sliders:slider[]=[];

}
