import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-comparator',
  templateUrl: './add-new-comparator.component.html',
  styleUrls: ['./add-new-comparator.component.less'],
})
export class AddNewComparatorComponent implements OnInit {
  current = 0;
  // @ViewChild('f') detailsForm: NgForm;
  index = 'First-content';
  // detailsForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    // this.detailsForm = new FormGroup({
    //   'compname': new FormGroup(null),
    //   'compdesc': new FormGroup(null)
    // })
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  // onDetailsSubmit(){
  //   console.log(this.detailsForm)
  // }
}
