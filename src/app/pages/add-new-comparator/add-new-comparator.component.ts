import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-comparator',
  templateUrl: './add-new-comparator.component.html',
  styleUrls: ['./add-new-comparator.component.less'],
})
export class AddNewComparatorComponent implements OnInit {
  current = 0;
  index = 'First-content';
  // discForm: FormGroup;
  validateDetailsForm: FormGroup;
  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateDetailsForm = this.fb.group({
      compName: [null, [Validators.required]],
      compDesc: [null, [Validators.required]]
    })
  }

  pre(): void {
    this.current -= 1;
    // this.changeContent();
  }

  next(): void {
    this.current += 1;
    // this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  // changeContent(): void {
  //   switch (this.current) {
  //     case 0: {
  //       this.index = 'First-content';
  //       break;
  //     }
  //     case 1: {
  //       this.index = 'Second-content';
  //       break;
  //     }
  //     case 2: {
  //       this.index = 'third-content';
  //       break;
  //     }
  //     default: {
  //       this.index = 'error';
  //     }
  //   }
  // }

  submitForm(){
    console.log(this.validateDetailsForm)
  }
}
