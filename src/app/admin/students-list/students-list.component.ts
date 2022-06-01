import { Component, OnInit } from '@angular/core';
import { StudentsListService } from 'src/app/students-list.service';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  studentData:any;
  constructor(private studentsData:StudentsListService) { }

  ngOnInit(): void {
    this.studentsData.getStudentsData().subscribe((studentslist)=>{
      this.studentData = studentslist;
    });
  }
  
}
