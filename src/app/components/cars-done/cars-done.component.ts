import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/common/models/car";
import { GetCarsService } from "src/app/common/service/get-cars.service";

@Component({
  selector: "app-cars-done",
  templateUrl: "./cars-done.component.html",
  styleUrls: ["./cars-done.component.scss"],
})
export class CarsDoneComponent implements OnInit {
  carsDone: Car[] = [];
  displayedColumns: string[] = ["model", "user", "problem"];
  constructor(private httpService: GetCarsService) {
    this.carsDone = httpService.carsCompleted;
  }
  private setCarsDone(cars: Car[]) {
    this.carsDone = cars;
  }

  ngOnInit() {
    this.setCarsDone(this.carsDone);
  }
}
