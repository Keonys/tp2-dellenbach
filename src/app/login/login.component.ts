import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;

  constructor(private service : ApiService) {
    this.form = new FormGroup({
      login: new FormControl(),
      motDePasse: new FormControl()
   });
  }

  ngOnInit() {
  }

  onSubmit() {
    let login = this.form.controls['login'].value;
    let mdp = this.form.controls['motDePasse'].value;
    console.log(this.service.getToken(login, mdp));
  } 
}