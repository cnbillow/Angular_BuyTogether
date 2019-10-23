import { Component, OnInit, Input ,AfterViewInit, Renderer2,ElementRef, ViewChild} from '@angular/core';


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

export class ImageSliderComponent implements OnInit,AfterViewInit {

  @ViewChild('slider',{static:true}) slider:ElementRef;
  constructor(private rd2: Renderer2) { }
  intervalId:any;
  selectedIndex= 0;
  ngOnInit() {
  }

  @Input() sliders:slider[]=[];

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.slider.nativeElement,
        'scrollLeft',
        (this.getIndex(++this.selectedIndex) *
          this.slider.nativeElement.scrollWidth) /
          this.sliders.length
      );
      
    },2000);
  }

  getIndex(index:number){
    return index>=0? index% this.sliders.length 
    : this.sliders.length-(Math.abs(index)%this.sliders.length)
  }

  
    handleScroll(ev) {
      const ratio =
        ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
      this.selectedIndex = Math.round(ratio);
    }
  
}


