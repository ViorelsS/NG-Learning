import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('inputSaluti') valoreInput!: ElementRef<HTMLInputElement>;

  colore = '';

  title = 'corso-angular';
  persone = [
    { nome: 'Mario', cognome: 'Rossi', isOnline: true, color: 'blue' },
    { nome: 'Paolo', cognome: 'Verdi', isOnline: false, color: 'red' },
    { nome: 'Luca', cognome: 'Bianchi', isOnline: true, color: 'green' },
    { nome: 'Giovanni', cognome: 'Neri', isOnline: false, color: 'yellow' },
    { nome: 'Giuseppe', cognome: 'Gialli', isOnline: true, color: 'orange' },
  ];

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.valoreInput);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.valoreInput);
  }

  onClick(): void {
    console.log(this.valoreInput.nativeElement.value);
  }

  cambiaColoreEvidenziatore(colore: string) {
    this.colore = colore;
  }
}
