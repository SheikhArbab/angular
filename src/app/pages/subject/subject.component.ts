import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

    userName: string = "";

  constructor( private _userName : SubjectService ) {

    this._userName.userName.subscribe(val => this.userName = val)

   }

  ngOnInit(): void {
  }

  updateName(value: string): void {
    this.userName = value
  }

}
