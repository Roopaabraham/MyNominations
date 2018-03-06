import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NominationComponent } from './nomination/nomination.component';
import { NomFormComponent } from './nom-form/nom-form.component';




@NgModule({
  declarations: [
    AppComponent,
    NominationComponent,
    NomFormComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
