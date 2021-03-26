import { Component, OnInit, Input } from "@angular/core";
import { Car } from "src/app/common/models/car";

const carsDone: Car[] = [
  {
    model: "Nissan",
    user: "Иван Тест4",
    problem: "Разбито заднее стекло",
  },
  {
    model: "Nissan",
    user: "Иван Тест5",
    problem: "Разбито заднее стекло",
  },
];

@Component({
  selector: "app-cars-done",
  templateUrl: "./cars-done.component.html",
  styleUrls: ["./cars-done.component.scss"],
})
export class CarsDoneComponent {
  displayedColumns: string[] = ["model", "user", "problem"];
  dataSource = carsDone;
}
