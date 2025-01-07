import { ServizioProvaService } from './../servizi/servizio-prova.service';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-prova',
  templateUrl: 'prova.component.html',
  styleUrl: 'prova.component.css',
})
export class ProvaComponent implements OnInit {
  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    console.log('prova component', this.servizioProva.getPersone());
  }
}
