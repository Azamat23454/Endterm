import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {SeriesRoutingModule} from "./series-routing.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SeriesRoutingModule
  ]
})
export class SeriesModule { }

