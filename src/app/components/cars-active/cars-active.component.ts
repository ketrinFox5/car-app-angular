import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/common/models/car';
import { GetCarsService } from 'src/app/common/services/get-cars.service';
import { Observable } from 'rxjs';
import { CreateUpdateCarDialogComponent } from '../create-update-car-dialog/create-update-car-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cars-active',
  templateUrl: './cars-active.component.html',
  styleUrls: ['./cars-active.component.scss'],
})
export class CarsActiveComponent implements OnInit {
  public cars$: Observable<Car[]>;

  displayedColumns: string[] = [
    'userName',
    'userPhone',
    'carModel',
    'carNumber',
    'problem',
    'isCompleted',
  ];

  constructor(
    private getCarsService: GetCarsService,
    private dialog: MatDialog
  ) {
    this.cars$ = getCarsService.cars$.asObservable();
  }

  ngOnInit() {}

  public carCompleted(id: string) {
    return this.getCarsService.completedCar(id);
  }

  public editCar(car: Car) {
    return this.getCarsService.updateCar(car);
  }

  public openDialog(car: Car): void {
    const dialogRef = this.dialog.open(CreateUpdateCarDialogComponent, {
      width: '500px',
      data: {
        id: car.userPhone,
        userName: car.userName,
        userPhone: car.userPhone,
        carModel: car.carModel,
        carNumber: car.carNumber,
        problem: car.problem,
      },
    });

    dialogRef.afterClosed().subscribe((result: Car) => {
      if (result) {
        this.getCarsService.updateCar(result);
      }
    });
  }
}
