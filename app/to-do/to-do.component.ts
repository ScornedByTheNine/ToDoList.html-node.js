import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  form: FormGroup;
  toDoArray = [];

  addItem(form: FormGroup) {
    this.toDoArray.push(form.get('toDoItem').value);

  }
  removeItem(item: string) {
    const index = this.toDoArray.indexOf(item);
    this.toDoArray.splice(index, 1);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

buildForm(){
  this.form = this.fb.group({
    toDoItem: ''
  });


  }

}

