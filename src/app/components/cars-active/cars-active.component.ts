import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/common/models/car";
import { GetCarsService } from "src/app/common/services/get-cars.service";
import { Observable } from "rxjs";
import { UpdateCarDialogComponent } from "../updata-car-dialog/update-car-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-cars-active",
  templateUrl: "./cars-active.component.html",
  styleUrls: ["./cars-active.component.scss"],
})
export class CarsActiveComponent implements OnInit {
  public cars$: Observable<Car[]>;

  displayedColumns: string[] = [
    "userName",
    "userPhone",
    "carModel",
    "carNumber",
    "problem",
    "isCompleted",
  ];

  constructor(private getCars: GetCarsService, private dialog: MatDialog) {
    this.cars$ = getCars.cars$.asObservable();
  }

  setCars(cars: Car[]) {
    // this.cars = cars;
  }

  ngOnInit() {}

  carCompleted(id: string) {
    return this.getCars.completedCar(id);
  }

  editCar(car: Car) {
    return this.getCars.updateCar(car);
  }

  openDialogUpdateCar(car: Car): void {
    const dialogRef = this.dialog.open(UpdateCarDialogComponent, {
      width: "500px",
      data: {
        id: car.userPhone,
        userName: car.userName,
        userPhone: car.userPhone,
        carModel: car.carModel,
        problem: car.problem,
        carNumber: car.carNumber,
      },
    });

    dialogRef.afterClosed().subscribe((result: Car) => {
      if (result) {
        this.getCars.updateCar(result);
      }
    });
  }
}
