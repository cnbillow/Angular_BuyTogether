import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { ImageSliderComponent } from './component/image-slider/image-slider.component';
import { HorizontalGridComponent } from './component/horizontal-grid/horizontal-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
