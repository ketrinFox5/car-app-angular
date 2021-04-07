import { Component, Inject, OnInit, Input } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Car } from "src/app/common/models/car";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  phonePattern,
  carNumberPattern,
  userNamePattern,
} from "src/app/common/cosnt/patterns";

@Component({
  selector: "update-car-dialog",
  templateUrl: "update-car-dialog.component.html",
  styleUrls: ["update-car-dialog.component.scss"],
})
export class UpdateCarDialogComponent implements OnInit {
  @Input() car: Car;
  myForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateCarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {
    this.myForm = new FormGroup({
      userName: new FormControl("Иванов Иван Иванович", [
        Validators.required,
        Validators.pattern(userNamePattern),
      ]),
      userPhone: new FormControl("", [
        Validators.pattern(phonePattern),
        Validators.required,
      ]),
      carModel: new FormControl(""),
      carNumber: new FormControl("", [
        Validators.required,
        Validators.pattern(carNumberPattern),
      ]),
      problem: new FormControl(""),
    });
  }

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close(false);
  }

  onSave(): void {
    this.dialogRef.close(true);
  }
}
