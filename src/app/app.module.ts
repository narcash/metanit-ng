import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child.component';
import { DataComponent } from './data/data.component';
import { DataModule } from './data/data.module';

@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, DataModule],
  providers: [],
  bootstrap: [AppComponent, ChildComponent, DataComponent],
})
export class AppModule {}
