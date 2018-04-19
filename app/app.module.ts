import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms' ;
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeService } from './services/home.service';
import { NavComponent } from './nav/nav.component';
import { ToDoComponent } from './to-do/to-do.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'to-do', component: ToDoComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ToDoComponent
  ],
  
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [HomeService],
  bootstrap: [AppComponent]
})


export class AppModule { }
