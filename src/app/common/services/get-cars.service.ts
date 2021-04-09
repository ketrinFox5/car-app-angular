import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "../models/car";
import { tap } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class GetCarsService {
  public cars$ = new BehaviorSubject<Car[]>([]);
  public cars: Car[];
  public carsCompleted: Car[];
  constructor(private http: HttpClient) {}

  public getData(): Observable<{ carList: Car[] }> {
    return this.http.get<{ carList: Car[] }>("assets/cars.json").pipe(
      tap((res: { carList: Car[] }) => {
        this.cars = res.carList;
        this.cars$.next(this.cars);
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
      })
    );
  }

  public addCar(car: Car) {
    car = { ...car, id: car.userPhone };
    this.cars.push(car);
    this.cars$.next(this.cars);
  }

  public completedCar(id: string) {
    const carCompleted = this.cars.find((item) => item.id == id);
    const resultCars: Car[] = this.cars.filter((item) => {
      return item.id != id;
    });
    this.carsCompleted.push(carCompleted);
    this.setCarsService(resultCars);
    this.cars$.next(this.cars);
  }

  public updateCar(car: Car) {
    const resultCars = this.cars.map((item) => {
      if (item.id === car.id) {
        return { ...car, id: car.userPhone };
      }
      return item;
    });
    this.setCarsService(resultCars);
    this.cars$.next(this.cars);
  }
}
