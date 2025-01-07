import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contatti',
  standalone: false,

  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css',
})
export class ContattiComponent implements OnInit {
  persone: any;
  persona: any;
  isProfile!: boolean;

  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone();
  }
}
