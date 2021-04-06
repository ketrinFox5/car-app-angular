import { Component } from "@angular/core";
import { Car } from "./common/models/car";
import { GetCarsService } from "./common/services/get-cars.service";
import { MatDialog } from "@angular/material/dialog";
import { CreateCarDialogComponent } from "./components/create-car-dialog/create-car-dialog.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  car: Car;
  userName: string;
  userPhone: string;
  carNumber: string;
  carModel: string;
  problem: string;

  constructor(private getCars: GetCarsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getCars.getData().subscribe();
    this.getCars.getDataDoneCars().subscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCarDialogComponent, {
      width: "500px",
      data: {
        username: this.userName,
        userPhone: this.userPhone,
        carModel: this.carModel,
        problem: this.problem,
        carNamber: this.carNumber,
      },
    });

    dialogRef.afterClosed().subscribe((result: Car) => {
      console.log("The dialog was closed");
      if (result) {
        this.car = result;
        console.log(this.car);
        this.getCars.cars.push(this.car);
      }
    });
  }
}
