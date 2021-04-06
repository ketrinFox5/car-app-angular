import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/common/models/car";
import { GetCarsService } from "src/app/common/services/get-cars.service";

@Component({
  selector: "app-cars-active",
  templateUrl: "./cars-active.component.html",
  styleUrls: ["./cars-active.component.scss"],
})
export class CarsActiveComponent implements OnInit {
  cars: Car[] = [];

  displayedColumns: string[] = [
    "position",
    "userName",
    "userPhone",
    "carModel",
    "carNumber",
    "problem",
    "isCompleted",
  ];

  constructor(private getCars: GetCarsService) {
    this.cars = getCars.cars;
  }

  setCars(cars: Car[]) {
    this.cars = cars;
  }

  ngOnInit() {}

  carCompleted(position: number) {
    const carCompleted = this.cars.find((item) => item.position == position);
    const resultCars: Car[] = this.cars.filter((item) => {
      return item.position != position;
    });
    this.getCars.carsCompleted.push(carCompleted);
    this.getCars.setCarsService(resultCars);
    return this.setCars(resultCars);
  }
}
