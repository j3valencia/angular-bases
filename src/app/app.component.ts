import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi primera app en Angular';

  public nombre: string = "Angular"

  public counter: number = 10;


  increaseBy(n: number): void{
    this.counter = this.counter+n;
  }

  reset(): void{
    this.counter = 10;
  }
}
