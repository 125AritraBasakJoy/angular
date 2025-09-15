import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule ],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css'
})
export class NgFor {
cityList: string[] = ["Dhaka", "Tangail", "Pabna", "Jesshre", "Khulna"];
}
