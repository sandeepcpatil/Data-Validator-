import { Component, OnInit } from '@angular/core';
import {form} from '../../Components/model/form.model'

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.less']
})
export class FirstPageComponent implements OnInit {
  isVisible= false;
  public fileSearchValue: any = '';
  public radioValue=" "
  formArray = [];
  forms = new form();
  constructor() { }


  ngOnInit(): void {
    this.formArray.push(this.forms)
  }

  public connectionsTypeList = [
    {name: 'Amazon S3', value:'s3'},
    {name: 'File Server', value:'file'},
    {name: 'Databricks', value:'databricks'},
  ];

  public connectionNameList = [
    {name: 's3-prod', value:'s3-prod'},
    {name: 's3-dev', value:'s3-dev'},
  ]

  public connectionBucketList = [
    {name: 'dds-validator-prod', value:'dds-validator-prod'},
    {name: 'dds-validator-dev', value:'dds-validator-dev'},
  ]
  public connectionFileList=[
    {name: 'CSV', value:'csv'},
    {name: 'JSON', value: 'json'}
  ]

    public filesSeparatedBy = [
    {name: 'Comma', value:'comma'},
    {name: 'Pipe', value:'pipe'},
  ];

    public headerTrue =[
    {name:'True', value: 'true'},
    {name: 'False', value:'false'}
  ]


  public sortBy(inp: string){
    return this.connectionFileList.sort();
  }

  showModal(): any{
    this.isVisible = true;
  }

  handleOk(): void{
    this.isVisible = false;
  }

  handleCancel(): void{
    this.isVisible = false;
  }

  addForm(){
    this.forms= new form;
    this.formArray.push(this.forms)
  }

}
