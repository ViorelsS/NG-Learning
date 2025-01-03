import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'corso-angular';
  persone = [
    { nome: 'Mario', cognome: 'Rossi', isOnline: true, color: 'blue' },
    { nome: 'Paolo', cognome: 'Verdi', isOnline: false, color: 'red' },
    { nome: 'Luca', cognome: 'Bianchi', isOnline: true, color: 'green' },
    { nome: 'Giovanni', cognome: 'Neri', isOnline: false, color: 'yellow' },
    { nome: 'Giuseppe', cognome: 'Gialli', isOnline: true, color: 'orange' },
  ];
}
