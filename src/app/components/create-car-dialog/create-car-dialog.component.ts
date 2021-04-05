import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Car } from "src/app/common/models/car";

@Component({
  selector: "create-car-dialog",
  templateUrl: "create-car-dialog.component.html",
  styleUrls: ["create-car-dialog.component.scss"],
})
export class CreateCarDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateCarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close(false);
  }

  onContinue(): void {
    this.dialogRef.close(true);
  }
}
