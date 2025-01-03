import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'corso-angular';
  isVisibile = true;

  onInput(event: Event) {
    this.title = (event.target as HTMLInputElement).value;
  }

  onClick(event: Event) {
    this.title = 'Ho cliccato sul bottone';
  }
}
