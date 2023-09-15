import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 todoList=[
  // {task:'swimming',completed:false},
  // {task:'Breakfast',completed:false},
  // {task:'College',completed:false},
  // {task:'shopping',completed:false},
  // {task:'dinner',completed:false},
  {venue1:'Marina1',venue2:'sundar resort1',task:'swimming',completed:false},
  {venue1:'Marina2',venue2:'sundar resort2',task:'Breakfast',completed:false},
  {venue1:'Marina3',venue2:'sundar resort3',task:'College',completed:false},
  {venue1:'Marina4',venue2:'sundar resort4',task:'dinner',completed:false},
  {venue1:'Marina5',venue2:'sundar resort5',task:'shopping',completed:false},
 ];
}
