import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string= 'firstProject';
  name: string='';
  email: string='';
  salary: number=0;
  handlechange(ev: any)
{
console.log(ev.length);
if (ev.length > 15) {
this.name = this.name.substr(0, 15);
alert("you are writing along name ")
}
if (ev.length > 20)
alert("Stop writing !!")
}
clearValue(){
  this.name = '';
  this.email = '';
  this.salary = 0;
  }



}
