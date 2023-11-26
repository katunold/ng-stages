import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-assemblyline',
  templateUrl: './assemblyline.component.html',
  styleUrls: ['./assemblyline.component.css']
})
export class AssemblylineComponent {

  @ViewChild('dataInput') dataInput: ElementRef | undefined;

  @Input() stages: string[] = [];
  newStageItem: string = '';
  items: string[][] = [];

  addItem(){
    if(this.newStageItem.trim() !== "") {
      this.items[0] = [this.newStageItem.trim(), ...(this.items[0] || [])];
      this.newStageItem = '';
    }
  }

  moveItemForward(stageIndex: number, item: string) {
    if (stageIndex < this.stages.length - 1) {
      this.items[stageIndex] = this.items[stageIndex].filter(i => i !== item);
      this.items[stageIndex + 1] = [item, ...(this.items[stageIndex + 1] || [])];
    } else {
      this.items[stageIndex] = this.items[stageIndex].filter(i => i !== item);
    }
  }

  moveItemBackward(stageIndex: number, item: string) {
    if (stageIndex > 0) {
      this.items[stageIndex] = this.items[stageIndex].filter(i => i !== item);
      this.items[stageIndex - 1] = [...(this.items[stageIndex - 1] || []), item];
    } else {
      this.items[stageIndex] = this.items[stageIndex].filter(i => i !== item);
    }
  }

}
