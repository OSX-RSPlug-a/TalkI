import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HybridTheoryModule } from './hybrid-theory/hybrid-theory.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HybridTheoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
