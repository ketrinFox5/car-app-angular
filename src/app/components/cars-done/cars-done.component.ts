import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/common/models/car";
import { GetCarsService } from "src/app/common/services/get-cars.service";

@Component({
  selector: "app-cars-done",
  templateUrl: "./cars-done.component.html",
  styleUrls: ["./cars-done.component.scss"],
})
export class CarsDoneComponent implements OnInit {
  carsDone: Car[] = [];
  displayedColumns: string[] = [
    "userName",
    "userPhone",
    "carModel",
    "carNumber",
    "problem",
  ];
  constructor(private getCars: GetCarsService) {
    this.carsDone = getCars.carsCompleted;
  }
  private setCarsDone(cars: Car[]) {
    this.carsDone = cars;
  }

  ngOnInit() {
    this.setCarsDone(this.carsDone);
  }
}
