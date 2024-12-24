import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  standalone: false,
  selector: 'viorelss-prova',
  templateUrl: 'prova.component.html',
  styleUrl: 'prova.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProvaComponent
  implements
    OnInit,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    DoCheck,
    OnDestroy
{
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
