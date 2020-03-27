import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
mathForm = new FormGroup({
  num1: new FormControl(this.randomNumber()),
  num2: new FormControl(this.randomNumber()),
  answer: new FormControl(""),
})
  constructor() { }

get num1(){
  return this.mathForm.value.num1
}
get num2(){
  return this.mathForm.value.num2
}

  ngOnInit() {
  }

  randomNumber(){
    return Math.floor(Math.random() * 10)
  }

}
