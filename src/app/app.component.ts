import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // template:`<app-header></app-header>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Demo-Application';
  titles: string = 'New application initilisation';
  timer: string = new Date().toLocaleTimeString();
  buttonhide: boolean = false;
  isactive: boolean = true;
  path: string = '../assets/img1.jpg';
  grass:boolean = false
  counter :number = 0
  name:any = "(input)=changeName($event)"
  increment = ()=>{
this.counter = this.counter + 1
}
decrement = ()=>{
  this.counter = this.counter -= 1
}

onchangeFunction =(e:any)=>{
 this.name = e.target.value
}



}
