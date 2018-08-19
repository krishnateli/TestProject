import { Component, OnInit } from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

import { ProjectService } from './services/project.service';
import { PeriodicElement } from '../../interfaces/periodic-elements';

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  serviceData: any;
  selectedProject: any;
  displayedColumns: string[] = ['select', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getData().subscribe(
      (response) => {
        this.serviceData = response;
        this.selectedProject = this.serviceData.data[0];
        console.log("response", response)
      },
      (error) => {
        console.error("Error!!!", error)
      })
  }

  showProjectDetails(projectid) {
    if (projectid && this.serviceData.data.map((el) => el.id).indexOf(projectid) != -1) {
      this.selectedProject = this.serviceData.data[this.serviceData.data.map((el) => el.id).indexOf(projectid)]
    } else {
      this.selectedProject = this.serviceData.data[0];
    }
    console.log("projectid", projectid)
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
