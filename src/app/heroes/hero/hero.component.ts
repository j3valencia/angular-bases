import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'IronMan';
  public age: number = 45;

  //propiedad q funciona como metodo
  get Capitalizado():string{
    return this.name.toUpperCase();
  }

  getDescription(): string{
    return `Mi nombre es ${this.name} y mi edad es: ${this.age}`;
  }

  changeName(): void{
    this.name= 'Spiderman';
  }

  changeAge(): void{
    this.age= 18;
  }

  reset(): void{
    this.name = 'Ironman';
    this.age = 45;
   }

}
