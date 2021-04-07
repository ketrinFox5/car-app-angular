import { Component } from "@angular/core";
import { Car } from "./common/models/car";
import { GetCarsService } from "./common/services/get-cars.service";
import { MatDialog } from "@angular/material/dialog";
import { CreateCarDialogComponent } from "./components/create-car-dialog/create-car-dialog.component";
import { UpdateCarDialogComponent } from "./components/updata-car-dialog/update-car-dialog.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // car: Car;
  // id: string;
  // userName: string;
  // userPhone: string;
  // carNumber: string;
  // carModel: string;
  // problem: string;

  constructor(private getCars: GetCarsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getCars.getData().subscribe();
    this.getCars.getDataDoneCars().subscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCarDialogComponent, {
      width: "500px",
      data: {
        // id: this.userPhone,
        // username: this.userName,
        // userPhone: this.userPhone,
        // carModel: this.carModel,
        // problem: this.problem,
        // carNamber: this.carNumber,
      },
    });

    dialogRef.afterClosed().subscribe((result: Car) => {
      if (result) {
        this.getCars.addCar(result);
      }
    });
  }
}
