import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/common/models/car";
import { GetCarsService } from "src/app/common/service/get-cars.service";

@Component({
  selector: "app-cars-active",
  templateUrl: "./cars-active.component.html",
  styleUrls: ["./cars-active.component.scss"],
})
export class CarsActiveComponent implements OnInit {
  cars: Car[];

  displayedColumns: string[] = [
    "position",
    "model",
    "user",
    "problem",
    "isCompleted",
  ];

  constructor(private httpService: GetCarsService) {
    this.cars = httpService.cars;
  }

  setCars(cars: Car[]) {
    this.cars = cars;
  }

  ngOnInit() {}

  carCompleted(position: number) {
    console.log(position);
    const resultCars: Car[] = this.cars.filter((item) => {
      console.log(item.position);
      return item.position != position;
    });
    // const resultCars: Car[] = [];
    // const length = this.cars.length;
    // this.cars.map((item, i) => {
    //   if (item[i].position === position && length) {
    //     return;
    //   } else {
    //     resultCars.push(item[i]);
    //     i++;
    //   }
    // });
    console.log(this.cars);
    console.log(resultCars);
    return this.setCars(resultCars);
  }
}
