import { Component,Input,Output, EventEmitter } from '@angular/core';
//interface ValgfriNavn{

   //id: string;
   // avatar string;
  //  name string; }


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required:true}) id!: string; 
  @Input({required:true}) selected!: boolean; 
  @Input({required:true}) name!: string;
  @Input({required:true}) avatar!: string;
  


  //@Input({required:true}) user!: ValgfriNavn{ {
    //id: string;
   // avatar string;
  //  name string; 

 



@Output() select  = new EventEmitter();  


//using signal to input 
  // avatar = input.required<string>();


get imagePatch(){
  return "assets/users/" + this.avatar; 
}
onSelectUser(){

this.select.emit(this.id); 
}

  



}
