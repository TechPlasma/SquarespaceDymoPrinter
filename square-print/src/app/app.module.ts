import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { LabelInterfaceComponent } from './label-interface/label-interface.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UI2Component } from './ui2/ui2.component';
import { LabelComponent } from './label/label.component';
import { EditLabelComponent } from './edit-label/edit-label.component';
import { PrintComponent } from './print/print.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelInterfaceComponent,
    SideNavComponent,
    UI2Component,
    LabelComponent,
    EditLabelComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  entryComponents:[EditLabelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
