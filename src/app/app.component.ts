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
    console.log('appcomponent', this.servizioProva.persone);
  }
}
