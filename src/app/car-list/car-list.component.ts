import { Component, OnInit } from '@angular/core';
import { Car } from '../car/car';
import { CarService } from '../car/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<Car> = [];
  
  constructor(private carService:CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars():void{
    this.carService.getCars().subscribe((cars) =>{
      this.cars = cars;
    });
  }

}
