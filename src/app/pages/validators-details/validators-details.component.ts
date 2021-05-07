import { Component, OnInit } from '@angular/core';

interface ItemData {
  name: string;
  description: string;
  validationTime: any;
  scheduleCadence: string;
  // createdAt: Time,
  createdBy: string;
  objectsValidated: number;
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
        name: `Comparator ${i + 1}`,
        description: `Comparator Desc ${i + 1}`,
        validationTime: this.today.getFullYear() + '-' + this.today.getMonth() + '-' + this.today.getDay() + " " + this.today.getHours() + ":" + this.today.getMinutes(),
        scheduleCadence: 'once',
        // createdAt: this.today.getHours()+ ":" + this.today.getMinutes() + ":" + this.today.getSeconds(),
        createdBy: 'Sandeep',
        objectsValidated: 10,
      });
    }
  }
}
