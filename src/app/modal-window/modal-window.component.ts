import { BasicDetailsService } from '../basic-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  basicDetails;

  constructor(private _dataservice: BasicDetailsService) {
    this._dataservice.getBasicDetails()
      .subscribe(res => this.basicDetails = res);
  }

  ngOnInit() {
  }

}
