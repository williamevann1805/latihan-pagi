import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  angkaPertama : number;
  angkaKedua : number;
  hasil : number;
  operator = "";
  counter = 0;
  boolDone = false;

  get1()
  {
    if (this.counter == 0)
    {
      this.angkaPertama = 1;
      this.counter++;
    }
    else
    {
      this.angkaKedua = 1;
      this.counter = 0;
    }
  }
  get2()
  {
    if (this.counter == 0)
    {
      this.angkaPertama = 2;
      this.counter++;
    }
    else
    {
      this.angkaKedua = 2;
      this.counter = 0;
    }
  }
  get3()
  {
    if (this.counter == 0)
    {
      this.angkaPertama = 3;
      this.counter++;
    }
    else
    {
      this.angkaKedua = 3;
      this.counter = 0;
    }
  }
  get4()
  {
    if (this.counter == 0)
    {
      this.angkaPertama = 4;
      this.counter++;
    }
    else
    {
      this.angkaKedua = 4;
      this.counter = 0;
    }
  }
  get5()
  {
    if (this.counter == 0)
    {
      this.angkaPertama = 5;
      this.counter++;
    }
    else
    {
      this.angkaKedua = 5;
      this.counter = 0;
    }
  }
  get6()
  {
    if (this.counter == 0)
    {
      this.angkaPertama = 6;
      this.counter++;
    }
    else
    {
      this.angkaKedua = 6;
      this.counter = 0;
    }
  }
  get7()
  {
    if (this.counter == 0)
    {
      this.angkaPertama = 7;
      this.counter++;
    }
    else
    {
      this.angkaKedua = 7;
      this.counter = 0;
    }
  }
  get8()
  {
    if (this.counter == 0)
    {
      this.angkaPertama = 8;
      this.counter++;
    }
    else
    {
      this.angkaKedua = 8;
      this.counter = 0;
    }
  }
  get9()
  {
    if (this.counter == 0)
    {
      this.angkaPertama = 9;
      this.counter++;
    }
    else
    {
      this.angkaKedua = 9;
      this.counter = 0;
    }
  }
  plus()
  {
    this.operator = "+";
  }
  bagi()
  {
    this.operator = "/";
  }
  kali()
  {
    this.operator = "*";
  }
  min()
  {
    this.operator = "-";
  }
  countResult()
  {
    if (this.operator == "+")
    {
      this.hasil = this.angkaPertama + this.angkaKedua;
    }
    else if (this.operator == "-")
    {
      this.hasil = this.angkaPertama - this.angkaKedua;
    }
    else if (this.operator == "/")
    {
      this.hasil = this.angkaPertama / this.angkaKedua;
    }
    else if (this.operator == "*")
    {
      this.hasil = this.angkaPertama * this.angkaKedua;
    }
    this.boolDone = true;
  }

}


