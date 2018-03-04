import {Component} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})

export class CalculatorComponent {
  numberClicked: number = 0;
  operationClicked: string = "+";
  totalValue: number = 0;

  getNumberClicked() {
    let value = this.numberClicked;
    value = value/100;
    return "£"+((Number(value)||0).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
  }

  getTotalValue() {
    let value = this.totalValue;
    value = value/100;
    return "£"+((Number(value)||0).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
  }

  onClickedNumber(event: any) {
    if(this.numberClicked === 0){
      this.numberClicked = event.target.value;
    } else {
      this.numberClicked += event.target.value;
    }
  }

  onClickedOperator(event: any) {
    if (event.target.value === "+") {
      this.totalValue = Number(this.totalValue) + Number(this.numberClicked);
    } else {
      this.totalValue = Number(this.totalValue) - Number(this.numberClicked);
    }
    this.numberClicked = 0;
  }
}
