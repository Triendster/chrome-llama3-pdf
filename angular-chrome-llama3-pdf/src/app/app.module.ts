import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// Import other modules here if necessary

@NgModule({
  declarations: [
    AppComponent
    // List other components, pipes, and directives that belong to this module
  ],
  imports: [
    BrowserModule
    // Include other Angular modules or your custom modules here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
