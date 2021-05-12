import { Component, OnInit } from '@angular/core';

interface ItemData {
  id: number;
  name: string;
  validationDetails: string;
  validationStatus: any;
  approvalStatus: string;
  // createdAt: Time,
  lastValidatedTime: string;
  // fileName: string;
  // objectsValidated: number;
}
@Component({
  selector: 'app-validators-details',
  templateUrl: './validators-details.component.html',
  styleUrls: ['./validators-details.component.less'],
})
export class ValidatorsDetailsComponent implements OnInit {
  listOfData: ItemData[] = [];
  public today = new Date();
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        id: +`${i}`,
        name: `Validator ${i + 1}`,
        validationDetails: `Validation Status ${i + 1}`,
        validationStatus: `Passed ${i}`,
        approvalStatus: `Approved ${i}`,
        lastValidatedTime: this.today.getHours()+ ":" + this.today.getMinutes() + ":" + this.today.getSeconds(),
        // createdBy: 'Dcube',
        // objectsValidated: 9,
        // fileName:`File ${i}`
      });
    }
  }
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  // listOfData = [
  //   {
  //     id: 1,
  //     name: 'John Brown',
  //     age: 32,
  //     expand: false,
  //     address: 'New York No. 1 Lake Park',
  //     description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
  //   },
  //   {
  //     id: 2,
  //     name: 'Jim Green',
  //     age: 42,
  //     expand: false,
  //     address: 'London No. 1 Lake Park',
  //     description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
  //   },
  //   {
  //     id: 3,
  //     name: 'Joe Black',
  //     age: 32,
  //     expand: false,
  //     address: 'Sidney No. 1 Lake Park',
  //     description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
  //   }
  // ];
}
