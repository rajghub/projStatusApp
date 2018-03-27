import { Component, OnInit } from '@angular/core';
import { ProjectDetailsService } from './../project-details.service';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent implements OnInit {
  projectDetails: Array<any>;
  // parentVar = 'I am from parent';
  constructor(private _dataService: ProjectDetailsService) {
    this._dataService.getProjectDetails()
      .subscribe(res => this.projectDetails = res);
  }

  ngOnInit() {
  }

}
