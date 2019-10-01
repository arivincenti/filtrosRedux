import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { TodoModel } from "../models/todo.model";
import { FormControl, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromTodo from '../todo.actions';

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;
  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkField.valueChanges.subscribe( () => {
      const action = new fromTodo.ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    })

  }

  editarTodoTexto(){
    if(!this.txtInput.valid){
      return;
    }

    const action = new fromTodo.EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  editar(){
    this.editando = true;
    setTimeout(()=> {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion(){
    this.editando = false;
  }

  eliminarTodo(){
    const action = new fromTodo.EliminarTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
