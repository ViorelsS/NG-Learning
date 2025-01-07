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
    if (this.route.snapshot.paramMap.has('id')) {
      this.isProfile = true;
      this.persona = this.servizioProva.getPersona(
        parseInt(this.route.snapshot.paramMap.get('id')!)
      );
      console.log(this.persone);
    } else {
      this.isProfile = false;
      this.persone = this.servizioProva.getPersone();
    }
    console.log(this.route.snapshot.paramMap.get('id'));
    console.log(this.isProfile);
  }
}
