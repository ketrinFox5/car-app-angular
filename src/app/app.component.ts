import { Component } from '@angular/core';
import { Car } from './common/models/car';
import { GetCarsService } from './common/services/get-cars.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateCarDialogComponent } from './components/create-update-car-dialog/create-update-car-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private getCarsService: GetCarsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCarsService.getData().subscribe();
    this.getCarsService.getDataDoneCars().subscribe();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(CreateUpdateCarDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: Car) => {
      if (result) {
        if (result.id == null && result.userName != null) {
          this.getCarsService.addCar(result);
        }
      }
    });
  }
}
