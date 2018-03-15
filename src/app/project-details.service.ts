import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDetailsService {
  testvar = [
    {
      'projectId': 'Proj0001',
      'projectName': 'Mylan Sitecore1',
      'task': 'Project Task',
      'resource': 'resource Name',
      'currentStatus': 'Received QA signoff',
      'requirements': 'Project1 requirement',
      'issues': 'Project Issues',
      'remarks': 'Project Remarks'
    },

    {
      'projectId': 'Proj0002',
      'projectName': 'Mylan Sitecore2',
      'task': 'Project2 Task',
      'resource': 'resource2 Name',
      'currentStatus': 'Received QA signoff2',
      'requirements': 'Project2 requirement2',
      'issues': 'Project Issues2',
      'remarks': 'Project Remarks2'
    },
    {
      'projectId': 'Proj0003',
      'projectName': 'Merck Sitecore2',
      'task': 'Project3 Task',
      'resource': 'resource3 Name',
      'currentStatus': 'Received QA signoff3',
      'requirements': 'Project2 requirement3',
      'issues': 'Project Issues3',
      'remarks': 'Project Remarks3'
    },

        {
      'projectId': 'Proj0001',
      'projectName': 'Mylan Sitecore1',
      'task': 'Project Task',
      'resource': 'resource Name',
      'currentStatus': 'Received QA signoff',
      'requirements': 'Project1 requirement',
      'issues': 'Project Issues',
      'remarks': 'Project Remarks'
    },

    {
      'projectId': 'Proj0002',
      'projectName': 'Mylan Sitecore2',
      'task': 'Project2 Task',
      'resource': 'resource2 Name',
      'currentStatus': 'Received QA signoff2',
      'requirements': 'Project2 requirement2',
      'issues': 'Project Issues2',
      'remarks': 'Project Remarks2'
    },
    {
      'projectId': 'Proj0003',
      'projectName': 'Merck Sitecore2',
      'task': 'Project3 Task',
      'resource': 'resource3 Name',
      'currentStatus': 'Received QA signoff3',
      'requirements': 'Project2 requirement3',
      'issues': 'Project Issues3',
      'remarks': 'Project Remarks3'
    }

  ];
  getProjectDetails() {
    return this.testvar;
  }

  constructor() { }

}
