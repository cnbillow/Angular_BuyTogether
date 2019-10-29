import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './shared/component/top-bar/top-bar.component';
import { ImageSliderComponent } from './shared/component/image-slider/image-slider.component';
import { HorizontalGridComponent } from './shared/component/horizontal-grid/horizontal-grid.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HomeModule } from './home'
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
