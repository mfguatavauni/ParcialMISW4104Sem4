import { Component, OnInit } from '@angular/core';
import { Car } from '../car/car';
import { Brand } from '../car/brand';
import { CarService } from '../car/car.service';

@Component({
  selector: 'app-carbrand',
  templateUrl: './carbrand.component.html',
  styleUrls: ['./carbrand.component.css']
})
export class CarbrandComponent implements OnInit {
  cars: Array<Car> = [];
  brands: Array<Brand> = [];
  i:number = 0;
  

  constructor(private carService:CarService) { }

  ngOnInit() {
    this.getBrands();
  }

  getBrands():void{
    this.carService.getCars().subscribe((cars) =>{
      this.cars = cars
      
      for (this.i = 0; this.i < this.cars.length; this.i++){
        let encontrado = this.brands.filter(item => item.marca ==  this.cars[this.i].marca);
        console.log("Entre", encontrado);

        if(encontrado.length == 0){
          //Adiciona
          this.brands.push(new Brand(this.cars[this.i].marca, 1));
        }else{
          const indice = this.brands.findIndex(item => item.marca === this.cars[this.i].marca);
          this.brands[indice].cantidad = this.brands[indice].cantidad + 1;
        }
      }

    });
  }
}
