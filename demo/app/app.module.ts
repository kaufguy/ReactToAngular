import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ReactComponents} from './react-to-export';
import { createReactToAngularComponent } from 'react-to-angular-wrapper';

// usage example
const reactToExport = [];
ReactComponents.forEach((comp) => {
  reactToExport.push(createReactToAngularComponent(comp));
});

@NgModule({
  declarations: [
    AppComponent,
    reactToExport
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    reactToExport
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
