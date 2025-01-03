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
  persone = [
    { nome: 'Mario', cognome: 'Rossi', isOnline: true },
    { nome: 'Paolo', cognome: 'Verdi', isOnline: false },
    { nome: 'Luca', cognome: 'Bianchi', isOnline: true },
    { nome: 'Giovanni', cognome: 'Neri', isOnline: false },
    { nome: 'Giuseppe', cognome: 'Gialli', isOnline: true },
  ];
  numero = 3;

  onInput(event: Event) {
    this.title = (event.target as HTMLInputElement).value;
  }

  onClick(event: Event) {
    this.title = 'Ho cliccato sul bottone';
  }
}
