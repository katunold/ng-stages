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

  // Move item forward to the next stage
  moveItemForward(stageIndex: number, item: string) {
    // Remove item from current stage
    this.items[stageIndex] = this.items[stageIndex].filter(i => i !== item);

    // If not at last stage, add item to next stage
    if (stageIndex < this.stages.length - 1) {
      const nextStage = stageIndex + 1;
      const nextStageItems = this.items[nextStage] || [];
      this.items[nextStage] = [item, ...nextStageItems];
    }
  }

  // Move item backward to the previous stage
  moveItemBackward(stageIndex: number, item: string) {
    // Remove item from current stage
    this.items[stageIndex] = this.items[stageIndex].filter(i => i !== item);

    // If not at first stage, add item to previous stage
    if (stageIndex > 0) {
      const previousStage = stageIndex - 1;
      const previousStageItems = this.items[previousStage] || [];
      this.items[previousStage] = [...previousStageItems, item];
    }
  }

}
