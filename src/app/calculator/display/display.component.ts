import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  firstValue: number = 0;
  secondValue: number = 0;
  sum: number = 0;
  resultValue: number = 0;
  @Input()
  get result() {
    return this.resultValue;
  }
  @Input()
  get first() {
    return this.firstValue;
  }
  @Input()
  get second() {
    return this.secondValue;
  }
  @Output() resultChange = new EventEmitter();
  @Output() firstChange = new EventEmitter();
  @Output() secondChange = new EventEmitter();
  set result(val) {
    this.resultValue = val;
    this.resultChange.emit(this.resultValue);
  }
  set first(val) {
    this.firstValue = val;
    this.firstChange.emit(this.firstValue);
  }
  set second(val) {
    this.secondValue = val;
    this.secondChange.emit(this.secondValue);
  }
  constructor() {
  }

  onKey() { // without type info
    this.sum = (this.first - 0) + (this.second - 0);
    console.log(this)
  }
  // onChange(): void {
  //   this.sum = (this.first - 0) + (this.second - 0);
  // }
  multiply(): void {
    this.result = this.first * this.second;
  }
  divide(): void {
    this.result = this.first / this.second;
  }
  substract(): void {

    this.result = this.first - this.second;
    console.log(this.result);
  }
  add(): void {
    this.result = this.sum;
  }
  ngOnInit() {
  }

}
