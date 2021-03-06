import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarsActiveComponent } from "./components/cars-active/cars-active.component";
import { CarsDoneComponent } from "./components/cars-done/cars-done.component";

const routes: Routes = [
  {
    path: "active-cars",
    component: CarsActiveComponent,
  },
  {
    path: "done-cars",
    component: CarsDoneComponent,
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "active-cars",
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "active-cars",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
