import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.less']
})
export class FirstPageComponent implements OnInit {
  isVisible= false;
  public fileSearchValue: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  public connectionFileList = [
    {name: 'CSV', value:'csv'},
    {name: 'XML', value:'xml'},
    {name: 'Json', value:'json'},
  ];

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

}
