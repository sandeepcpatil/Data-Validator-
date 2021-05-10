import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { AfterViewInit } from '@angular/core';
import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd/tree';

interface FoodNode {
  name: string;
  disabled?: boolean;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Parent1',
    children: [{ name: 'file1' }, { name: 'file2'}, { name: 'file3' }]
  },
  {
    name: 'Parent2',
    children: [
      {
        name: 'Parent21',
        children: [{ name: 'file1' }, { name: 'file2' }]
      },
      {
        name: 'Parent22',
        children: [{ name: 'file1' }, { name: 'file2' }]
      }
    ]
  }
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  disabled: boolean;
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.less']
})
// export class TreeViewComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

// export class TreeViewComponent implements AfterViewInit {
//   public fileSearchValue: any = '';
//   private transformer = (node: FoodNode, level: number) => {
//     return {
//       expandable: !!node.children && node.children.length > 0,
//       name: node.name,
//       level: level,
//       disabled: !!node.disabled
//     };
//   };
//   selectListSelection = new SelectionModel<ExampleFlatNode>();

//   treeControl = new FlatTreeControl<ExampleFlatNode>(
//     node => node.level,
//     node => node.expandable
//   );

//   treeFlattener = new NzTreeFlattener(
//     this.transformer,
//     node => node.level,
//     node => node.expandable,
//     node => node.children
//   );

//   dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);

//   constructor() {
//     this.dataSource.setData(TREE_DATA);
//   }

//   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

//   ngAfterViewInit(): void {
//     setTimeout(() => {
//       this.treeControl.expand(this.getNode('Vegetables')!);
//     }, 300);
//   }

//   getNode(name: string): ExampleFlatNode | null {
//     return this.treeControl.dataNodes.find(n => n.name === name) || null;
//   }
// }


export class TreeViewComponent {
  // activated node
  public fileSearchValue: any=" ";
  activatedNode?: NzTreeNode;
  nodes = [
    {
      title: 'parent 0',
      key: '100',
      author: 'NG ZORRO',
      expanded: true,
      children: [
        { title: 'leaf 0-0', key: '1000', author: 'NG ZORRO', isLeaf: true },
        { title: 'leaf 0-1', key: '1001', author: 'NG ZORRO', isLeaf: true }
      ]
    },
    {
      title: 'parent 1',
      key: '101',
      author: 'NG ZORRO',
      children: [
        { title: 'leaf 1-0', key: '1010', author: 'NG ZORRO', isLeaf: true },
        { title: 'leaf 1-1', key: '1011', author: 'NG ZORRO', isLeaf: true }
      ]
    }
  ];

  openFolder(data: NzTreeNode | NzFormatEmitEvent): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      const node = data.node;
      if (node) {
        node.isExpanded = !node.isExpanded;
      }
    }
  }

  activeNode(data: NzFormatEmitEvent): void {
    this.activatedNode = data.node!;
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  selectDropdown(): void {
    // do something
  }

  constructor(private nzContextMenuService: NzContextMenuService) {}
}
