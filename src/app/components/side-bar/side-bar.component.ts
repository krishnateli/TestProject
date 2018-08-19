import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  navItems = [
    {
      link: "link1", name: "Groups", logo: "filter_none"
    }, {
      link: "projects", name: "Projects", logo: "pie_chart_outline"
    }, {
      link: "link2", name: "Forms", logo: "panorama_vertical"
    }, {
      link: "link3", name: "Settings", logo: "brightness_low"
    }, {
      link: "link4", name: "Map & Data View", logo: "location_disabled"
    }, {
      link: "link4", name: "Map & Data View", logo: "location_disabled"
    }
  ];
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
