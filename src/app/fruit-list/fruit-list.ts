import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fruit-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './fruit-list.html',
  styleUrl: './fruit-list.css'
})
export class FruitList {
   fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
   selectedFruits: string | null = null; 
   selectedFruit(fruit:string){
    this.selectedFruits = fruit;
   }
}
