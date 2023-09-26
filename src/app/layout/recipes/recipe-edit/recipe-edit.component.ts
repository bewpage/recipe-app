import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;

  constructor(private rotue: ActivatedRoute) {}

  ngOnInit() {
    this.rotue.params.subscribe(params => {
      this.id = Number(params['id']);
      this.editMode = params['id'] != null;
      console.log('editMode', this.editMode);
    });
  }
}
