  
import { Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hasil',
  templateUrl: './hasil.component.html',
  styleUrls: ['./hasil.component.css']
})
export class InputComponent implements OnInit {

  constructor(private router : Router) { }
  ngOnInit() {
  }
  btn1  : 1;
  btn2  : 2;
  btn3  : 3;
  btn4  : 4;
  btn5  : 5;
  btn6  : 6;
  btn7  : 7;
  btn8  : 8;
  btn9  : 9;

  submit()
  {
     this.router.navigate(['/list', this.txtNama, this.txtPenjelasan]);
  }
}