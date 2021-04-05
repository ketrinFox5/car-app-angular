import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "../models/car";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class GetCarsService {
  public cars: Car[];
  public carsCompleted: Car[];
  constructor(private http: HttpClient) {}

  public getData(): Observable<{ carList: Car[] }> {
    return this.http.get<{ carList: Car[] }>("assets/cars.json").pipe(
      tap((res: { carList: Car[] }) => {
        this.cars = res.carList;
        console.log(this.cars);
      })
    );
  }
  public setCarsService(cars: Car[]) {
    this.cars = cars;
  }

  public getDataDoneCars(): Observable<{ carsCompleted: Car[] }> {
    return this.http.get<{ carsCompleted: Car[] }>("assets/cars.json").pipe(
      tap((res: { carsCompleted: Car[] }) => {
        this.carsCompleted = res.carsCompleted;
        console.log(this.carsCompleted);
      })
    );
  }
}
