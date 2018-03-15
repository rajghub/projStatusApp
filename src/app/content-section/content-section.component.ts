import { Component, OnInit } from '@angular/core';
import { ProjectDetailsService } from './../project-details.service';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent implements OnInit {
  projectDetails;
  constructor(service: ProjectDetailsService) {
    this.projectDetails = service.getProjectDetails();
  }

  ngOnInit() {
  }

}
