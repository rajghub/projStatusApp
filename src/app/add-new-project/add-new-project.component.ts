import { Component, OnInit } from '@angular/core';
import { BasicDetailsService } from './../basic-details.service';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})
export class AddNewProjectComponent implements OnInit {
  basicDetails;

  constructor(private _dataservice: BasicDetailsService) {
    this._dataservice.getBasicDetails()
      .subscribe(res => this.basicDetails = res);
  }


  ngOnInit() {
  }

}
