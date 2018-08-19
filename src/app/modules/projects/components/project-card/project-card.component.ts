import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() projectList;
  @Output() showProjectDetailsEvent = new EventEmitter();

  selectedProjectId:number = 1;

  constructor() { }

  ngOnInit() {
    console.log("projectList", this.projectList)
  }

  showProjectDetails(projectid) {
    this.selectedProjectId = projectid;
    this.showProjectDetailsEvent.emit(projectid);
  }

}
