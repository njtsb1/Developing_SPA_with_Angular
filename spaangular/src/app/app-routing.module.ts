import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  //Home
  {
    path: '',
    component: HomeComponent
  },
  //Student
  {
    path: 'students',
    component: StudentsComponent
  },
  //Teacher
  {
    path: 'teachers',
    component: TeachersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
