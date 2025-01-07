import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioProvaService {
  persone = [
    { nome: 'Mario', cognome: 'Rossi', isOnline: true, color: 'blue' },
    { nome: 'Paolo', cognome: 'Verdi', isOnline: false, color: 'red' },
    { nome: 'Luca', cognome: 'Bianchi', isOnline: true, color: 'green' },
    { nome: 'Giovanni', cognome: 'Neri', isOnline: false, color: 'yellow' },
    { nome: 'Giuseppe', cognome: 'Gialli', isOnline: true, color: 'orange' },
  ];

  constructor() {}

  getPersone() {
    return this.persone;
  }

  getPersona(index: number) {
    return this.persone[index];
  }
}
