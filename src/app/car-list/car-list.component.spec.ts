/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CarListComponent } from './car-list.component';
import { CarComponent } from '../car/car.component';
import { CarService } from '../car/car.service';
import { Car } from '../car/car';

describe('Test Componente CarList | Se esperan tres vehiculos', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ CarListComponent, CarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear 3 Componentes', () => {
        let cars: Array<Car> = [];
        cars.push(new Car(1, "Hiunday", "Sedan", "nov", "2015", 2500, 'Azul', 'Http'));
        cars.push(new Car(2, "Mercedez", "Sedan", "nov", "2015", 2500, 'Azul', 'Http'));
        cars.push(new Car(3, "Honda", "Sedan", "nov", "2015", 2500, 'Azul', 'Http'));

        component.cars = cars;
        fixture.detectChanges();
      
        const listadoDepuracion = fixture.debugElement.nativeElement.querySelectorAll('tr');
        expect(listadoDepuracion.length - 1).toBe(component.cars.length);
        
  });
});
