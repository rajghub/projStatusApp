import { StringDecoder } from 'string_decoder';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-snapshot',
  templateUrl: './project-snapshot.component.html',
  styleUrls: ['./project-snapshot.component.css']
})
export class ProjectSnapshotComponent implements OnInit {
  title1 = 'Snapshot title';
  // @Input() childVar: string;

  constructor() { }
  ngOnInit() {
  }

}
