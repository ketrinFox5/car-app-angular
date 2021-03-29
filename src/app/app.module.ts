import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarsActiveComponent } from "./components/cars-active/cars-active.component";
import { CarsDoneComponent } from "./components/cars-done/cars-done.component";
import { MatTableModule } from "@angular/material/table";
import { AppRoutingModule } from "./app-routing.module";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogOverviewExample } from "./components/create-car-dialog/create-car-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CarsActiveComponent,
    CarsDoneComponent,
    DialogOverviewExample,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
