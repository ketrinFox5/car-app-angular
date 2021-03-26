import { Component, OnInit } from "@angular/core";
import { Car } from "./common/models/car";
import { GetCarsService } from "./common/service/get-cars.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private httpService: GetCarsService) {}

  ngOnInit() {
    this.httpService.getData().subscribe();
  }
}
