import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { students } from '../model/students'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  value: number;
  displayTable:  boolean = false;

  listStudents: students[] = [
    { name: 'Nivaldo', age: 32, email: 'njtsb1@gmail.com', course: 'Business Administration' },
    { name: 'Jose', age: 32, email: 'nivaldo148tadeu@hotmail.com', course: 'Logistics and Supply Chain' },
    { name: 'Tadeu', age: 32, email: 'estilomirabolante@gmail.com', course: 'IT Management' },
    { name: 'Teste', age: 32, email: 'Teste@gmail.com', course: 'Analysis and Systems Development' }
  ];

  displayedColumns: string[] = ['Name', 'Age', 'E-mail', 'Course'];

  ngOnInit(): void {
    this.value = 5;
  }

  changevalue() {
    this.value++;
  }

  resetvalue() {
    this.value = 0;
  }

  displayTabela(){
    this.displayTable = true;
  }

}
