import { Component } from '@angular/core';
import { ToDo } from "./todo";
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Hello World Tutorial";

      list: ToDo[] = [];
      todoValue = "";

  // Add Items to list..
    addItem(){

        if(this.todoValue !== ""){
          const newItem: ToDo = {
            id : Date.now(),
            value : this.todoValue,
            isDone : false
          };
          this.list.push(newItem);
        }
        this.todoValue = "";
    }
  
  deleteItem(fromId:number){
    this.list = this.list.filter(item => item.id !== fromId);
  }



}
