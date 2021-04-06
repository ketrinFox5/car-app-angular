import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/common/models/car";
import { GetCarsService } from "src/app/common/services/get-cars.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-cars-active",
  templateUrl: "./cars-active.component.html",
  styleUrls: ["./cars-active.component.scss"],
})
export class CarsActiveComponent implements OnInit {
  public cars$: Observable<Car[]>;

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
    this.cars$ = getCars.cars$.asObservable();
  }

  setCars(cars: Car[]) {
    // this.cars = cars;
  }

  ngOnInit() {}

  carCompleted(id: string) {
    return this.getCars.completedCar(id);
  }
}
