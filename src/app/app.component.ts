import { interval, Observable } from 'rxjs';
import { ServizioProvaService } from './servizi/servizio-prova.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    // interval(1000).subscribe((numero) => console.log(numero));
  }
}
