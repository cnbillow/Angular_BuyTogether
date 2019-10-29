import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { SharedRoutingModule } from './shared-routing.module';
import { TopBarComponent } from './component/top-bar';
import { ImageSliderComponent } from './component/image-slider';
import { FooterComponent } from './component/footer/footer.component';
import { HorizontalGridComponent } from './component/horizontal-grid';


@NgModule({
  declarations: [
    TopBarComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    TopBarComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    FooterComponent
  ]
})
export class SharedModule { }
