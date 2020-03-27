import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { delay, filter } from 'rxjs/operators'
import { MathValidators } from '../math-validators'

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
mathForm = new FormGroup(
  {
  num1: new FormControl(this.randomNumber()),
  num2: new FormControl(this.randomNumber()),
  answer: new FormControl(""),
}, 
[
  MathValidators.addition("answer", "num1", "num2"),


]
);
  constructor() { }

get num1(){
  return this.mathForm.value.num1
}
get num2(){
  return this.mathForm.value.num2
}

  ngOnInit() {
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(100)
      ).subscribe(()=>{

      this.mathForm.setValue({
        num1: this.randomNumber(),
        num2: this.randomNumber(),
        answer: ""
      })
    })
    
  }

  randomNumber(){
    return Math.floor(Math.random() * 10)
  }

}
