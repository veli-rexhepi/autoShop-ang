import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/classes/car';

@Component({
  selector: 'app-buy-a-used-car',
  templateUrl: './buy-a-used-car.component.html',
  styleUrls: ['./buy-a-used-car.component.css']
})

export class BuyAUsedCarComponent implements OnInit { 

  // Load the items into array
  cars = [
    new Car(1, 'bmw3 01 350x200.png', 'BMW 3', '190 kW (258 Hp)', '2.993 ccm', 'Diesel', 'Automatic Transmition', 'Full Leather', 'Price 20,000 $'),
    new Car(2, 'bmw3 02 350x200.png', 'BMW 3', '135 kW (184 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'White Metallic', 'Price 14,000 $'),
    new Car(3, 'bmw3 03 350x200.png', 'BMW 3', '120 kW (160 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'Red Metallic', 'Price 12,000 $'),
    new Car(4, 'bmw3 04 350x200.png', 'BMW 3', '190 kW (258 Hp)', '2.993 ccm', 'Diesel', 'Automatic Transmition', 'Full Leather', 'Price 20,000 $'),
    new Car(5, 'bmw3 05 350x200.png', 'BMW 3', '135 kW (184 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'White Metallic', 'Price 14,000 $'),
    new Car(6, 'bmw3 06 350x200.png', 'BMW 3', '120 kW (160 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'Red Metallic', 'Price 12,000 $'),
    new Car(7, 'bmw3 07 350x200.png', 'BMW 3', '190 kW (258 Hp)', '2.993 ccm', 'Diesel', 'Automatic Transmition', 'Full Leather', 'Price 20,000 $'),
    new Car(8, 'bmw3 08 350x200.png', 'BMW 3', '135 kW (184 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'White Metallic', 'Price 14,000 $'),
    new Car(9, 'bmw3 09 350x200.png', 'BMW 3', '120 kW (160 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'Red Metallic', 'Price 12,000 $'),
    new Car(10, 'bmw3 10 350x200.png', 'BMW 3', '190 kW (258 Hp)', '2.993 ccm', 'Diesel', 'Automatic Transmition', 'Full Leather', 'Price 20,000 $'),
    new Car(11, 'bmw3 11 350x200.png', 'BMW 3', '135 kW (184 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'White Metallic', 'Price 14,000 $'),
    new Car(12, 'bmw3 12 350x200.png', 'BMW 3', '120 kW (160 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'Red Metallic', 'Price 12,000 $'),
    new Car(13, 'bmw3 01 350x200.png', 'BMW 3', '190 kW (258 Hp)', '2.993 ccm', 'Diesel', 'Automatic Transmition', 'Full Leather', 'Price 20,000 $'),
    new Car(14, 'bmw3 02 350x200.png', 'BMW 3', '135 kW (184 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'White Metallic', 'Price 14,000 $'),
    new Car(15, 'bmw3 03 350x200.png', 'BMW 3', '120 kW (160 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'Red Metallic', 'Price 12,000 $'),
    new Car(16, 'bmw3 04 350x200.png', 'BMW 3', '190 kW (258 Hp)', '2.993 ccm', 'Diesel', 'Automatic Transmition', 'Full Leather', 'Price 20,000 $'),
    new Car(17, 'bmw3 05 350x200.png', 'BMW 3', '135 kW (184 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'White Metallic', 'Price 14,000 $'),
    new Car(18, 'bmw3 06 350x200.png', 'BMW 3', '120 kW (160 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'Red Metallic', 'Price 12,000 $'),
    new Car(19, 'bmw3 07 350x200.png', 'BMW 3', '190 kW (258 Hp)', '2.993 ccm', 'Diesel', 'Automatic Transmition', 'Full Leather', 'Price 20,000 $'),
    new Car(20, 'bmw3 08 350x200.png', 'BMW 3', '135 kW (184 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'White Metallic', 'Price 14,000 $'),
    new Car(21, 'bmw3 09 350x200.png', 'BMW 3', '120 kW (160 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'Red Metallic', 'Price 12,000 $'),
    new Car(22, 'bmw3 10 350x200.png', 'BMW 3', '190 kW (258 Hp)', '2.993 ccm', 'Diesel', 'Automatic Transmition', 'Full Leather', 'Price 20,000 $'),
    new Car(23, 'bmw3 11 350x200.png', 'BMW 3', '135 kW (184 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'White Metallic', 'Price 14,000 $'),
    new Car(24, 'bmw3 12 350x200.png', 'BMW 3', '120 kW (160 Hp)', '1.995 ccm', 'Diesel', 'Manual gearbox', 'Red Metallic', 'Price 12,000 $'),
  ];

  // Get the total number of items
  totalItems = this.cars.length;
  
  // Define how many items shall display a row. Maximum suported items by design are 6 per row
  itemsLimitPerRow = 6;

  // Calculate the number of needed rows to display all items
  getDisplayItemsRowNumber = () => {
    let itemsRowNumber: number;

    if (this.totalItems % this.itemsLimitPerRow == 0) {
      itemsRowNumber = this.totalItems / this.itemsLimitPerRow;
    } else {
      itemsRowNumber =  Math.floor(this.totalItems / this.itemsLimitPerRow) + 1;
    }

    let itemsRowNumberArray = [];
    for (let i = 0; i < itemsRowNumber; i ++) {
      itemsRowNumberArray.push(i);
    }
    return itemsRowNumberArray;
  }   

  ngOnInit() {    
  }  
}

let test = new BuyAUsedCarComponent();
// test.getDisplayItemsRowNumber;