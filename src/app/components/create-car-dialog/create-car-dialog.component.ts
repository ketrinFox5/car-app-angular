import { Component, Inject, OnInit } from "@angular/core";
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
  selector: "create-car-dialog",
  templateUrl: "create-car-dialog.component.html",
  styleUrls: ["create-car-dialog.component.scss"],
})
export class CreateCarDialogComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateCarDialogComponent>,
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

  onContinue(): void {
    this.dialogRef.close(true);
  }
}
