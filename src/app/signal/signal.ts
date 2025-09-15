import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  standalone: true,
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {
    currentLight = signal('Red');

    changeLight(){
      this.currentLight.set('Green');
    }
}
