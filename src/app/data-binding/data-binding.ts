import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
firstName: string = "Dumbledore";
age: number = 89;

showWelcomeMessage(){
  alert("Welcome!!")
}

}


