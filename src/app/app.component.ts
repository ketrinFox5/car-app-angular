import { Component } from "@angular/core";
import { Car } from "./common/models/car";
import { GetCarsService } from "./common/service/get-cars.service";
import { MatDialog } from "@angular/material/dialog";
import { CreateCarDialogComponent } from "./components/create-car-dialog/create-car-dialog.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  car: Car;
  user: string;
  model: string;
  problem: string;

  constructor(private httpService: GetCarsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.httpService.getData().subscribe();
    this.httpService.getDataDoneCars().subscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCarDialogComponent, {
      width: "500px",
      data: { user: this.user, model: this.model, problem: this.problem },
    });

    dialogRef.afterClosed().subscribe((result: Car) => {
      console.log("The dialog was closed");
      const isEverythingIsFilled = Object.values(result).every(Boolean);
      if (result && isEverythingIsFilled) {
        this.car = result;
        console.log(this.car);
        this.httpService.cars.push(this.car);
      }
    });
  }
}
