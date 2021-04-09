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
  selector: "create-update-car-dialog",
  templateUrl: "create-update-car-dialog.component.html",
  styleUrls: ["create-update-car-dialog.component.scss"],
})
export class CreateUpdateCarDialogComponent implements OnInit {
  public carForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateUpdateCarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {
    this.carForm = new FormGroup({
      userName: new FormControl(data ? data.userName : null, [
        Validators.required,
        Validators.pattern(userNamePattern),
      ]),
      userPhone: new FormControl(data ? data.userPhone : null, [
        Validators.pattern(phonePattern),
        Validators.required,
      ]),
      carModel: new FormControl(data ? data.carModel : null),
      carNumber: new FormControl(data ? data.carNumber : null, [
        Validators.required,
        Validators.pattern(carNumberPattern),
      ]),
      problem: new FormControl(data ? data.problem : null),
      id: new FormControl(data ? data.id : null),
    });
  }

  ngOnInit(): void {}

  public onClose(): void {
    this.dialogRef.close(false);
  }

  public onSave(): void {
    this.dialogRef.close(this.carForm.value);
  }
}
