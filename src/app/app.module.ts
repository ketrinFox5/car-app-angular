import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarsActiveComponent } from "./components/cars-active/cars-active.component";
import { CarsDoneComponent } from "./components/cars-done/cars-done.component";
import { MatTableModule } from "@angular/material/table";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, CarsActiveComponent, CarsDoneComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
